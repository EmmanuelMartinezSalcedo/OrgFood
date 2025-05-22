import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FeaturedProduct } from '../../../domain/interfaces/featured-product.interface';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'app-featured-product-card',
  imports: [
    DecimalPipe,
    FormsModule,
    NzImageModule,
    NzTypographyModule,
    NzRateModule,
  ],
  templateUrl: './featured-product-card.component.html',
  styleUrl: './featured-product-card.component.less',
})
export class FeaturedProductCardComponent {
  @Input() product!: FeaturedProduct;

  //   @Input() product: FeaturedProduct = {
  //   id: 0,
  //   image: '',
  //   name: '',
  //   ratingMedia: 0,
  //   totalRates: 0,
  //   price: 0
  // };
}
