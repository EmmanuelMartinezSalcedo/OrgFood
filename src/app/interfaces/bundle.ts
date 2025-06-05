import { SafeUrl } from '@angular/platform-browser';
import { FeaturedProduct } from './product';

interface ProductQuantity {
  product: FeaturedProduct;
  quantity: number;
}
export interface Bundle {
  id: string;
  name: string;
  description: string;
  image: SafeUrl;
  price: number;
  discount?: number;
  averageRate: number;
  categories: string[];
  tags: string[];
  products: ProductQuantity[];
}
