import { Component } from '@angular/core';
import { AboutItem } from '../../../interfaces/about';
import {
  Recycle,
  MapPin,
  Shield,
  Leaf,
  Handshake,
  BadgeCheck,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-whatis',
  imports: [LucideAngularModule],
  templateUrl: './whatis.html',
  styleUrl: './whatis.css',
})
export class Whatis {
  aboutItems: AboutItem[];

  constructor() {
    this.aboutItems = [
      {
        name: 'Is Sustainable',
        icon: Recycle,
        description: 'Uses eco-friendly methods to protect the planet.',
      },
      {
        name: 'Is Local',
        icon: MapPin,
        description: 'Partners with nearby farmers to reduce carbon footprint.',
      },
      {
        name: 'Is Chemical-Free',
        icon: Shield,
        description: 'Grown without pesticides, herbicides, or GMOs.',
      },
      {
        name: 'Is Fresh',
        icon: Leaf,
        description: 'Delivered quickly after harvest for maximum flavor.',
      },
      {
        name: 'Is Ethical',
        icon: Handshake,
        description: 'Ensures fair labor and responsible sourcing.',
      },
      {
        name: 'Is Certified Organic',
        icon: BadgeCheck,
        description: 'Meets rigorous organic farming standards.',
      },
    ];
  }
}
