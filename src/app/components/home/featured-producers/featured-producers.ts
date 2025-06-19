import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FeaturedProducerCard } from '../featured-producer-card/featured-producer-card';
import { BrandDto, BrandService } from '../../../services/brand-service';

@Component({
  selector: 'app-featured-producers',
  imports: [FeaturedProducerCard],
  templateUrl: './featured-producers.html',
  styleUrl: './featured-producers.css',
})
export class FeaturedProducers implements OnInit {
  featuredProducersTemplate: BrandDto[] = [];

  constructor(
    private brandService: BrandService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.brandService.getLatestBrands().subscribe({
      next: (brands) => {
        this.featuredProducersTemplate = brands;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching brands:', err);
      },
    });
  }
}
