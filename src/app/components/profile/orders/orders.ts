import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { myself } from '../../../constants/mocks/myself';
import { AddressPipe } from '../../../pipes/address-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [AddressPipe, DatePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  me: User;
  constructor() {
    this.me = myself;
  }
}
