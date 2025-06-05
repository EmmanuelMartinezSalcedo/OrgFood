import { Component } from '@angular/core';
import { FeaturedProduct } from '../../../interfaces/product';
import { products } from '../../../constants/mocks/products';
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

@Component({
  selector: 'app-sell',
  imports: [CurrencyPipe, LucideAngularModule, Rating, Comments],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell {
  product: FeaturedProduct;
  quantity: number;
  plusIcon: LucideIconData;
  minusIcon: LucideIconData;
  heartIcon: LucideIconData;
  shareIcon: LucideIconData;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = products.find((b) => b.id === id)!;

    this.plusIcon = Plus;
    this.minusIcon = Minus;
    this.heartIcon = Heart;
    this.shareIcon = Share2;

    this.quantity = 1;
  }

  get discountedPrice(): number {
    return (
      this.product.price - (this.product.price * this.product.discount!) / 100
    );
  }

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity += 1;
  }
}
