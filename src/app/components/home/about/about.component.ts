import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../../services/responsive.service';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    NzTypographyModule,
    NzButtonModule,
    NzImageModule,
    NzGridModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
})
export class AboutComponent implements OnInit, OnDestroy {
  imageUrl: string =
    'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  imageAlt: string = 'Nuestros productos';

  isMediumScreen: boolean = false;
  private subscription: Subscription = new Subscription();
  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.subscription = this.responsiveService.screenSize$.subscribe(() => {
      this.isMediumScreen = this.responsiveService.isMediumScreen();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
