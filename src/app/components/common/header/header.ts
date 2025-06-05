import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  LucideAngularModule,
  Store,
  Heart,
  Info,
  User,
  ShoppingCart,
  Search,
  Menu,
  LucideIconData,
} from 'lucide-angular';
import { MenuItem } from '../../../interfaces/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchForm: FormControl;

  menuItems: MenuItem[];
  searchIcon: LucideIconData;
  menuIcon: LucideIconData;

  constructor(private router: Router) {
    this.searchForm = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.menuItems = [
      {
        name: 'Shop',
        icon: Store,
      },
      {
        name: 'Favorites',
        icon: Heart,
      },
      {
        name: 'About',
        icon: Info,
      },
      {
        name: 'Profile',
        icon: User,
      },
      {
        name: 'My cart',
        icon: ShoppingCart,
      },
    ];
    this.searchIcon = Search;
    this.menuIcon = Menu;
  }

  onSearch() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
