import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { myself } from '../../../constants/mocks/myself';
import { AddressPipe } from '../../../pipes/address-pipe';

@Component({
  selector: 'app-addresses',
  imports: [AddressPipe],
  templateUrl: './addresses.html',
  styleUrl: './addresses.css',
})
export class Addresses {
  me: User;

  constructor() {
    this.me = myself;
  }
}
