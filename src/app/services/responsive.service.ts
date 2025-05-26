import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private readonly breakpoints: { [key: string]: number } = {
    xs: 425,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  };

  private screenSize: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.getScreenSize()
  );
  screenSize$ = this.screenSize.asObservable();
  private resizeObserver: ResizeObserver;

  constructor(private ngZone: NgZone) {
    this.checkAndUpdateSize();

    this.resizeObserver = new ResizeObserver((entries) => {
      this.ngZone.run(() => {
        this.checkAndUpdateSize();
      });
    });

    this.resizeObserver.observe(document.body);
  }

  private checkAndUpdateSize(): void {
    const width = document.documentElement.clientWidth;
    const newSize = this.calculateScreenSize(width);
    const currentSize = this.screenSize.getValue();

    if (newSize !== currentSize) {
      this.screenSize.next(newSize);
    }
  }

  private calculateScreenSize(width: number): string {
    if (width <= this.breakpoints['xs']) return 'xs';
    if (width <= this.breakpoints['sm']) return 'sm';
    if (width <= this.breakpoints['md']) return 'md';
    if (width <= this.breakpoints['lg']) return 'lg';
    if (width <= this.breakpoints['xl']) return 'xl';
    return 'xxl';
  }

  private getScreenSize(): string {
    return this.calculateScreenSize(document.documentElement.clientWidth);
  }

  isExtraSmallScreen(): boolean {
    const width = document.documentElement.clientWidth;
    return width <= this.breakpoints['xs'];
  }

  isSmallScreen(): boolean {
    const width = document.documentElement.clientWidth;
    return width <= this.breakpoints['sm'];
  }

  isMediumScreen(): boolean {
    const width = document.documentElement.clientWidth;
    return width <= this.breakpoints['md'];
  }

  isLargeScreen(): boolean {
    const width = document.documentElement.clientWidth;
    return width <= this.breakpoints['lg'];
  }

  isExtraLargeScreen(): boolean {
    const width = document.documentElement.clientWidth;
    return width <= this.breakpoints['xl'];
  }
  isExtraExtraLargeScreen(): boolean {
    return true;
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
