import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Bundle } from './pages/bundle/bundle';
import { Profile } from './pages/profile/profile';
import { Me } from './components/profile/me/me';
import { Addresses } from './components/profile/addresses/addresses';
import { Subscriptions } from './components/profile/subscriptions/subscriptions';
import { Orders } from './components/profile/orders/orders';
import { Producer } from './pages/producer/producer';
import { Mycart } from './pages/mycart/mycart';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: Product,
    canActivate: [AuthGuard],
  },
  {
    path: 'bundle/:id',
    component: Bundle,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [AuthGuard],
    children: [
      { path: 'me', component: Me },
      { path: 'addresses', component: Addresses },
      { path: 'subscriptions', component: Subscriptions },
      { path: 'orders', component: Orders },
      { path: '', redirectTo: 'me', pathMatch: 'full' },
    ],
  },
  {
    path: 'producer/:id',
    component: Producer,
    canActivate: [AuthGuard],
  },
  {
    path: 'mycart',
    component: Mycart,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: About,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
