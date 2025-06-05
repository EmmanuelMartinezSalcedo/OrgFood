import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FeaturedProduct } from '../../../interfaces/product';
import { FeaturedProductCard } from '../featured-product-card/featured-product-card';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  LucideIconData,
} from 'lucide-angular';
import { products } from '../../../constants/mocks/products';

@Component({
  selector: 'app-featured-products',
  imports: [FeaturedProductCard, LucideAngularModule],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts {
  leftIcon: LucideIconData;
  rightIcon: LucideIconData;

  itemsPerGroup: number;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {
    this.leftIcon = ChevronLeft;
    this.rightIcon = ChevronRight;

    this.itemsPerGroup = 3;
    this.breakpointObserver
      .observe([
        '(max-width: 740px)',
        '(max-width: 1050px)',
        '(max-width: 1440px)',
      ])
      .subscribe((state) => {
        if (state.breakpoints['(max-width: 740px)']) {
          this.itemsPerGroup = 1;
        } else if (state.breakpoints['(max-width: 1050px)']) {
          this.itemsPerGroup = 2;
        } else if (state.breakpoints['(max-width: 1440px)']) {
          this.itemsPerGroup = 3;
        } else {
          this.itemsPerGroup = 4;
        }
        this.cdr.markForCheck();
      });
  }

  featuredProductsInGroups(groupSize: number) {
    const groups = [];

    for (let i = 0; i < products.length; i += groupSize) {
      groups.push(products.slice(i, i + groupSize));
    }

    return groups;
  }
}
