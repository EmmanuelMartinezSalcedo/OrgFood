import { Component } from '@angular/core';
import { myself } from '../../../constants/mocks/myself';
import { User } from '../../../interfaces/user';
import { AddressPipe } from '../../../pipes/address-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-subscriptions',
  imports: [AddressPipe, CurrencyPipe],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.css',
})
export class Subscriptions {
  me: User;
  constructor() {
    this.me = myself;
  }
}
