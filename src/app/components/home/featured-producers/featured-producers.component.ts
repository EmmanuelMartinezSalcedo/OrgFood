import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeaturedProducerCardComponent } from '../featured-producer-card/featured-producer-card.component';
import { FeaturedProducer } from '../../../domain/interfaces/featured-producer.interface';
import { ResponsiveService } from '../../../services/responsive.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-featured-producers',
  imports: [FeaturedProducerCardComponent, NzGridModule, NzTypographyModule],
  templateUrl: './featured-producers.component.html',
  styleUrl: './featured-producers.component.less',
})
export class FeaturedProducersComponent implements OnInit, OnDestroy {
  tempProducers: FeaturedProducer[] = [];
  private subscription: Subscription = new Subscription();
  span: number = 6;

  constructor(private responsiveService: ResponsiveService) {}
  ngOnInit(): void {
    this.tempProducers = [
      {
        id: 1,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/ORI/1647035411.png',
        name: 'Organic India',
      },
      {
        id: 2,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/SYN/1689799093.png',
        name: 'Pure Synergy',
      },
      {
        id: 3,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/NTW/1647036294.png',
        name: 'Naturewise',
      },
      {
        id: 4,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/CLG/1652392714.png',
        name: 'Cliganic',
      },
      {
        id: 5,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/WSB/1652408953.png',
        name: 'Badger',
      },
      {
        id: 6,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/FRO/1652409677.png',
        name: 'Frontier Co-op',
      },
      {
        id: 7,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/YGT/1663708722.png',
        name: 'Yogi',
      },
      {
        id: 8,
        imageUrl:
          'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brand/logo/LVN/1689796681.png',
        name: 'Leven Rose',
      },
    ];

    this.subscription = this.responsiveService.screenSize$.subscribe(() => {
      if (this.responsiveService.isSmallScreen()) {
        this.span = 24;
      } else if (this.responsiveService.isMediumScreen()) {
        this.span = 12;
      } else if (this.responsiveService.isLargeScreen()) {
        this.span = 8;
      } else {
        this.span = 6;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
