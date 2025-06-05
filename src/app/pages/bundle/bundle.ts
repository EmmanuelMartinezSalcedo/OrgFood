import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Sell } from '../../components/bundle/sell/sell';

@Component({
  selector: 'app-bundle',
  imports: [Header, Sell],
  templateUrl: './bundle.html',
  styleUrl: './bundle.css',
})
export class Bundle {}
