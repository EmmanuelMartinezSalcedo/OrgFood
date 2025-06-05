import { Component, input, InputSignal } from '@angular/core';
import { FeaturedProducer } from '../../../interfaces/producer';

@Component({
  selector: 'app-featured-producer-card',
  imports: [],
  templateUrl: './featured-producer-card.html',
  styleUrl: './featured-producer-card.css',
})
export class FeaturedProducerCard {
  producer: InputSignal<FeaturedProducer> = input.required<FeaturedProducer>();
}
