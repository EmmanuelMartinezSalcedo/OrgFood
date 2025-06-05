import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Sell } from '../../components/product/sell/sell';

@Component({
  selector: 'app-product',
  imports: [Header, Sell],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {}
