import { Component } from '@angular/core';
import { FeaturedProducer } from '../../../interfaces/producer';
import { FeaturedProducerCard } from '../featured-producer-card/featured-producer-card';
import { producers } from '../../../constants/mocks/producers';

@Component({
  selector: 'app-featured-producers',
  imports: [FeaturedProducerCard],
  templateUrl: './featured-producers.html',
  styleUrl: './featured-producers.css',
})
export class FeaturedProducers {
  featuredProducersTemplate: FeaturedProducer[];

  constructor() {
    this.featuredProducersTemplate = [
      producers[3],
      producers[1],
      producers[2],
      producers[0],
      producers[3],
      producers[2],
      producers[0],
      producers[1],
    ];
  }
}
