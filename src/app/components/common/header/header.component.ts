import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../../services/responsive.service';
import { SidebarService } from '../../../services/sidebar.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzTypographyModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCollapsed: boolean = false;
  isMedium: boolean = false;
  screenSize: string = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private responsiveService: ResponsiveService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.subscription = this.responsiveService.screenSize$.subscribe((size) => {
      const wasMobile = this.isMedium;
      this.isMedium = this.responsiveService.isMediumScreen();

      if (wasMobile && !this.isMedium) {
        this.sidebarService.hideSidebar();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
