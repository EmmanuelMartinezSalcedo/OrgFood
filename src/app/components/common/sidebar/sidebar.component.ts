import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less',
})
export class SidebarComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscription = this.sidebarService.isVisible$.subscribe(
      (isVisible) => (this.isVisible = isVisible)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
