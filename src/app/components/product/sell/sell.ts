import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconData,
  Plus,
  Minus,
  Heart,
  Share2,
} from 'lucide-angular';
import { Rating } from '../../common/rating/rating';
import { Comments } from '../../common/comments/comments';
import { ProductDto, ProductService } from '../../../services/product-service';

@Component({
  selector: 'app-sell',
  imports: [CurrencyPipe, LucideAngularModule, Rating, Comments],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
  standalone: true,
})
export class Sell implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  product!: ProductDto;
  productImageUrl: string = '';
  quantity: number = 1;

  plusIcon: LucideIconData = Plus;
  minusIcon: LucideIconData = Minus;
  heartIcon: LucideIconData = Heart;
  shareIcon: LucideIconData = Share2;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          this.productImageUrl = this.productService.getProductImageUrl(
            product.id
          );
          this.cdr.detectChanges();
        },
      });
    }
  }

  get discountedPrice(): number {
    if (!this.product) return 0;
    return (
      this.product.price -
      (this.product.price * (this.product.discount_percent ?? 0)) / 100
    );
  }

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  addToCart() {
    if (!this.product?.id) return;

    const key = 'cart';
    const stored = localStorage.getItem(key);
    let cart: { id: string; quantity: number }[] = stored
      ? JSON.parse(stored)
      : [];

    const existing = cart.find((item) => item.id === this.product.id);

    if (existing) {
      existing.quantity += this.quantity;
    } else {
      cart.push({ id: this.product.id, quantity: this.quantity });
    }

    localStorage.setItem(key, JSON.stringify(cart));
  }
}
