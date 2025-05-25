import { FormsModule } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { FeaturedProduct } from '../../../domain/interfaces/featured-product.interface';
import { FeaturedProductCardComponent } from '../featured-product-card/featured-product-card.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-featured-products',
  imports: [
    FormsModule,
    FeaturedProductCardComponent,
    NzLayoutModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule,
    NzTypographyModule,
  ],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.less',
})
export class FeaturedProductsComponent implements OnInit {
  indexes: number[] = [0, 5];

  tempProducts: FeaturedProduct[] = [];

  imageUrls: string[] = [
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/him/him06043/m/85.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/gai/gai14580/m/50.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rae/rae00806/m/65.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mbe/mbe01149/m/31.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01718/m/52.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sog/sog18608/m/42.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/wsb/wsb33170/m/36.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sre/sre01172/m/51.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/tra/tra00014/m/48.jpg',
    'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/gai/gai15175/m/44.jpg',
  ];

  is4K: boolean = false;
  isLaptopL: boolean = false;
  isLaptop: boolean = false;
  isTablet: boolean = false;
  isMobileL: boolean = false;
  cardsPerView: number = 5;

  constructor() {}

  ngOnInit(): void {
    this.tempProducts = [
      {
        id: 1,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/him/him06043/m/85.jpg',
        name: 'Himalaya, Organic Ashwagandha, 90 Caplets',
        ratingMedia: 4.5,
        totalRates: 9123,
        price: 108.85,
      },
      {
        id: 2,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/gai/gai14580/m/50.jpg',
        name: 'Gaia Herbs, Milk Thistle, 120 Vegan Capsules',
        ratingMedia: 4.5,
        totalRates: 881,
        price: 202.94,
      },
      {
        id: 3,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rae/rae00806/m/65.jpg',
        name: 'Rael, Organic Cotton Cover Pads with Leaklocker, Large, 14 Count',
        ratingMedia: 4.5,
        totalRates: 2461,
        price: 41.66,
      },
      {
        id: 4,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mbe/mbe01149/m/31.jpg',
        name: 'Sierra Bees, Organic Lip Balm Variety Pack, 4 Pack, 0.15 oz (4.25 g) Each',
        ratingMedia: 4.5,
        totalRates: 75554,
        price: 19.71,
      },
      {
        id: 5,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01718/m/52.jpg',
        name: 'California Gold Nutrition, Foods, Organic Garlic Powder, 3.7 oz (104 g)',
        ratingMedia: 4.5,
        totalRates: 6076,
        price: 26.11,
        discountedPrice: 22.19,
      },
      {
        id: 6,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sog/sog18608/m/42.jpg',
        name: 'Simply Organic, Onion Powder, 3 oz (85 g)',
        ratingMedia: 4.5,
        totalRates: 11419,
        price: 29.8,
      },
      {
        id: 7,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/wsb/wsb33170/m/36.jpg',
        name: 'Badger, Cuticle Care, Shea Butter, 0.75 oz (21 g)',
        ratingMedia: 4.5,
        totalRates: 22833,
        price: 26.36,
      },
      {
        id: 8,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sre/sre01172/m/51.jpg',
        name: 'Sports Research, Organic MCT Oil, Keto C8, 16 fl oz (473 ml)',
        ratingMedia: 4.5,
        totalRates: 2415,
        price: 126.24,
      },
      {
        id: 9,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/tra/tra00014/m/48.jpg',
        name: "Traditional Medicinals, Organic Mother's Milk®, Original with Fennel & Fenugreek, Caffeine Free, 16 Wrapped Tea Bags, 0.99 oz (28 g)",
        ratingMedia: 4.5,
        totalRates: 22692,
        price: 27.13,
      },
      {
        id: 10,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/gai/gai15175/m/44.jpg',
        name: "Gaia Herbs, Lion's Mane Mushroom, 40 Vegan Capsules",
        ratingMedia: 4.5,
        totalRates: 516,
        price: 119.33,
      },
    ];

    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    const width = window.innerWidth;
    if (width <= 425) {
      this.isMobileL = true;
      this.cardsPerView = 1;
    } else if (width <= 768) {
      this.isTablet = true;
      this.cardsPerView = 2;
    } else if (width <= 1024) {
      this.isLaptop = true;
      this.cardsPerView = 3;
    } else if (width <= 1440) {
      this.isLaptopL = true;
      this.cardsPerView = 4;
    } else {
      this.is4K = true;
      this.cardsPerView = 5;
    }
    this.updateIndexes();
  }

  updateIndexes() {
    this.indexes = [];
    for (let i = 0; i < this.tempProducts.length; i += this.cardsPerView) {
      this.indexes.push(i);
    }
  }
}
