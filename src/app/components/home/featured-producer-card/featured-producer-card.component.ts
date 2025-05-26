import { Component, Input } from '@angular/core';
import { FeaturedProducer } from '../../../domain/interfaces/featured-producer.interface';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-featured-producer-card',
  imports: [NzImageModule],
  templateUrl: './featured-producer-card.component.html',
  styleUrl: './featured-producer-card.component.less',
})
export class FeaturedProducerCardComponent {
  @Input() producer!: FeaturedProducer;
}
