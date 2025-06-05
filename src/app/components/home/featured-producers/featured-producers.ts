import { Component } from '@angular/core';
import { FeaturedProducer } from '../../../interfaces/producer';
import { FeaturedProducerCard } from '../featured-producer-card/featured-producer-card';

@Component({
  selector: 'app-featured-producers',
  imports: [FeaturedProducerCard],
  templateUrl: './featured-producers.html',
  styleUrl: './featured-producers.css',
})
export class FeaturedProducers {
  featuredProducerTemplate1: FeaturedProducer;
  featuredProducerTemplate2: FeaturedProducer;
  featuredProducerTemplate3: FeaturedProducer;
  featuredProducersTemplate: FeaturedProducer[];

  constructor() {
    this.featuredProducerTemplate1 = {
      id: '0',
      name: 'Naturalist',
      image:
        'https://images.unsplash.com/photo-1629527821795-79d67a6e39bf?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    this.featuredProducerTemplate2 = {
      id: '1',
      name: 'Jarritos',
      image:
        'https://images.unsplash.com/photo-1579630942078-100a2f8e9052?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    this.featuredProducerTemplate3 = {
      id: '2',
      name: 'Makoyara',
      image:
        'https://images.unsplash.com/photo-1563377225929-7084bcef8e24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG9yZ2FuaWMlMjBmb29kJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
    };

    this.featuredProducersTemplate = [
      this.featuredProducerTemplate1,
      this.featuredProducerTemplate2,
      this.featuredProducerTemplate3,
      this.featuredProducerTemplate1,
      this.featuredProducerTemplate2,
      this.featuredProducerTemplate3,
      this.featuredProducerTemplate1,
      this.featuredProducerTemplate2,
    ];
  }
}
