import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Bundle } from './pages/bundle/bundle';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product/:id', component: Product },
  { path: 'bundle/:id', component: Bundle },
];
