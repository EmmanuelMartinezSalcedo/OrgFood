import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FeaturedProduct } from '../../../domain/interfaces/featured-product.interface';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-featured-product-card',
  imports: [
    DecimalPipe,
    FormsModule,
    NzImageModule,
    NzTypographyModule,
    NzRateModule,
    NzCardModule,
    NzIconModule,
    NzButtonModule,
  ],
  templateUrl: './featured-product-card.component.html',
  styleUrl: './featured-product-card.component.less',
})
export class FeaturedProductCardComponent {
  @Input() product!: FeaturedProduct;
}
