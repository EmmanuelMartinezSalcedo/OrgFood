import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bundles } from '../../../constants/mocks/bundles';
import { Bundle } from '../../../interfaces/bundle';
import { CurrencyPipe } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconData,
  Plus,
  Minus,
  Heart,
  Share2,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { Rating } from '../../common/rating/rating';
import { Comments } from '../../common/comments/comments';

@Component({
  selector: 'app-sell',
  imports: [CurrencyPipe, LucideAngularModule, Rating, Comments],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell {
  bundle: Bundle;
  plusIcon: LucideIconData;
  minusIcon: LucideIconData;
  heartIcon: LucideIconData;
  shareIcon: LucideIconData;
  linkIcon: LucideIconData;
  quantity: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.bundle = bundles.find((b) => b.id === id)!;

    this.plusIcon = Plus;
    this.minusIcon = Minus;
    this.heartIcon = Heart;
    this.shareIcon = Share2;
    this.linkIcon = SquareArrowOutUpRight;

    this.quantity = 1;
  }

  get discountedPrice(): number {
    return (
      this.bundle.price - (this.bundle.price * this.bundle.discount!) / 100
    );
  }

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }
}
