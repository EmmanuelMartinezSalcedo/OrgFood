import { Component, input, InputSignal } from '@angular/core';
import { FeaturedProducer } from '../../../interfaces/producer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-producer-card',
  imports: [],
  templateUrl: './featured-producer-card.html',
  styleUrl: './featured-producer-card.css',
})
export class FeaturedProducerCard {
  producer: InputSignal<FeaturedProducer> = input.required<FeaturedProducer>();

  constructor(private router: Router) {}
  goToProducer() {
    this.router.navigate(['/producer', this.producer().id]);
  }
}
