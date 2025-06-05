import { Component, input, InputSignal } from '@angular/core';
import { FeaturedProduct } from '../../../interfaces/product';
import { Rating } from '../../common/rating/rating';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-product-card',
  imports: [Rating, CurrencyPipe],
  templateUrl: './featured-product-card.html',
  styleUrl: './featured-product-card.css',
})
export class FeaturedProductCard {
  product: InputSignal<FeaturedProduct> = input.required<FeaturedProduct>();

  constructor(private router: Router) {}
  get discountedPrice(): number {
    return (
      this.product().price -
      (this.product().price * this.product().discount!) / 100
    );
  }

  goToProduct() {
    this.router.navigate(['/product', this.product().id]);
  }
}
