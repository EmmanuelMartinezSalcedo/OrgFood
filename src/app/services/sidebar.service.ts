import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isVisible = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisible.asObservable();

  toggleSidebar() {
    this.isVisible.next(!this.isVisible.getValue());
  }
  hideSidebar() {
    this.isVisible.next(false);
  }
}
