import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LucideAngularModule,
  LucideIconData,
  Plus,
  Minus,
  Heart,
  Share2,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { CurrencyPipe } from '@angular/common';
import { Rating } from '../../common/rating/rating';
import { Comments } from '../../common/comments/comments';
import {
  BundleService,
  BundleDto,
  ProductQuantity,
} from '../../../services/bundle-service';
import { FormsModule } from '@angular/forms';
import {
  AddressDto,
  Address as AddressService,
} from '../../../services/address';
import {
  PaymentMethodDto,
  PaymentMethodService,
} from '../../../services/payment-service';
import { FavoriteService } from '../../../services/favorite-service';
import {
  SubscriptionService,
  SubscriptionPayload,
} from '../../../services/subscription-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sell',
  imports: [
    CurrencyPipe,
    LucideAngularModule,
    Rating,
    Comments,
    FormsModule,
    NgClass,
  ],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell implements OnInit {
  bundle!: BundleDto;
  quantity = 1;

  plusIcon: LucideIconData = Plus;
  minusIcon: LucideIconData = Minus;
  heartIcon: LucideIconData = Heart;
  shareIcon: LucideIconData = Share2;
  linkIcon: LucideIconData = SquareArrowOutUpRight;

  private bundleService = inject(BundleService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private subscriptionService = inject(SubscriptionService);
  private favoriteService = inject(FavoriteService);

  @ViewChild('subscribeModal')
  subscribeModalRef!: ElementRef<HTMLDialogElement>;

  addresses: AddressDto[] = [];
  paymentMethods: PaymentMethodDto[] = [];

  selectedAddressId: string = '';
  selectedPaymentMethodId: string = '';
  deliveryDay: number = 1;

  private addressService = inject(AddressService);
  private paymentService = inject(PaymentMethodService);
  subscriptionId: string | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.bundleService.getBundleById(id).subscribe({
      next: (bundleData) => {
        const bundleWithImage = {
          ...bundleData,
          image_path: this.bundleService.getBundleImageUrl(bundleData.id),
        };

        this.bundleService.getAllProducts().subscribe({
          next: (products) => {
            const relatedProducts = products
              .filter((p) => p.bundle_id === bundleData.id)
              .map<ProductQuantity>((p) => ({
                product: {
                  ...p,
                  averageRate: Math.floor(Math.random() * 5) + 1,
                },
                quantity: 1,
              }));

            this.bundle = {
              ...bundleWithImage,
              products: relatedProducts,
            };

            this.cdr.detectChanges();

            const userId = sessionStorage.getItem('userId');
            if (userId) {
              this.subscriptionService
                .getSubscriptionsByUser(userId)
                .subscribe({
                  next: (res) => {
                    const found = res.subscriptions.find(
                      (s) => s.bundle_id === this.bundle.id
                    );
                    this.subscriptionId = found?.id || null;
                    this.cdr.detectChanges();
                  },
                  error: (err) => {
                    console.error('❌ Error fetching subscriptions:', err);
                  },
                });
            }
          },
        });
      },
    });
  }

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity++;
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  openSubscribeModal() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.addressService.getAddressesByUserId(userId).subscribe({
      next: (data) => {
        this.addresses = data;
        this.cdr.detectChanges();
      },
    });

    this.paymentService.getAllByUser(userId).subscribe({
      next: (data) => {
        this.paymentMethods = data;
        this.cdr.detectChanges();
      },
    });

    this.subscribeModalRef.nativeElement.showModal();
  }

  confirmSubscription() {
    if (
      !this.selectedAddressId ||
      !this.selectedPaymentMethodId ||
      !this.bundle?.id
    )
      return;

    const payload: SubscriptionPayload = {
      addressId: this.selectedAddressId,
      bundleId: this.bundle.id,
      paymentMethodId: this.selectedPaymentMethodId,
      delivery: this.deliveryDay,
    };

    this.subscriptionService.subscribe(payload).subscribe({
      next: () => {
        this.subscribeModalRef.nativeElement.close();
        alert('✅ Subscription successful!');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Subscription failed:', err);
        alert('❌ Subscription failed!');
      },
    });
  }

  unsubscribe() {
    if (!this.subscriptionId) return;

    this.subscriptionService.unsubscribe(this.subscriptionId).subscribe({
      next: () => {
        this.subscriptionId = null;
        alert('❌ Unsubscribed successfully.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Failed to unsubscribe:', err);
        alert('Error unsubscribing.');
      },
    });
  }

  get bundleTotalPrice(): number {
    if (!this.bundle?.products) return 0;

    return this.bundle.products.reduce((acc, pq) => {
      const productPrice = Number(pq.product.price) || 0; // convierte string → number
      const quantity = pq.quantity ?? 1;
      return acc + productPrice * quantity;
    }, 0);
  }

  get discountedPrice(): number {
    const total = this.bundleTotalPrice;
    return total - (total * this.bundle.discount_percent) / 100;
  }

  isFavorite = false;

  toggleFavorite() {
    const userId = sessionStorage.getItem('userId');
    if (!userId || !this.bundle?.id) return;

    const bundleId = this.bundle.id;

    if (this.isFavorite) {
      this.favoriteService
        .removeBundleFromFavorites(userId, bundleId)
        .subscribe(() => {
          this.isFavorite = false;
        });
    } else {
      this.favoriteService
        .addBundleToFavorites(userId, bundleId)
        .subscribe(() => {
          this.isFavorite = true;
        });
    }
  }
}
