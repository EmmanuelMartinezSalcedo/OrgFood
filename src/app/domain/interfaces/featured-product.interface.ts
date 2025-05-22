import { SafeUrl } from '@angular/platform-browser';
export interface FeaturedProduct {
  id: number;
  imageUrl: string;
  name: string;
  ratingMedia: number;
  totalRates: number;
  price: number;
  discountedPrice?: number;
}
