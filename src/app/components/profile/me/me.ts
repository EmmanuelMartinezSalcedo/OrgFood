import { Component } from '@angular/core';
import { myself } from '../../../constants/mocks/myself';
import { User } from '../../../interfaces/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-me',
  imports: [DatePipe],
  templateUrl: './me.html',
  styleUrl: './me.css',
})
export class Me {
  me: User;
  constructor() {
    this.me = myself;
  }
}
