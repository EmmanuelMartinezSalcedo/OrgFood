import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private readonly breakpoints: { [key: string]: number } = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  };

  private screenSize: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.getScreenSize()
  );
  screenSize$ = this.screenSize.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => {
        this.screenSize.next(this.getScreenSize());
      });
  }

  private getScreenSize(): string {
    const width: number = window.innerWidth;
    if (width < this.breakpoints['xs']) return 'xs';
    if (width < this.breakpoints['sm']) return 'sm';
    if (width < this.breakpoints['md']) return 'md';
    if (width < this.breakpoints['lg']) return 'lg';
    if (width < this.breakpoints['xl']) return 'xl';
    return 'xxl';
  }

  isSmallScreen(): boolean {
    const currentSize: string = this.screenSize.getValue();
    return currentSize === 'xs' || currentSize === 'sm';
  }

  isMediumScreen(): boolean {
    const currentSize: string = this.screenSize.getValue();
    return currentSize === 'md';
  }

  isLargeScreen(): boolean {
    const currentSize: string = this.screenSize.getValue();
    return (
      currentSize === 'lg' || currentSize === 'xl' || currentSize === 'xxl'
    );
  }
}
