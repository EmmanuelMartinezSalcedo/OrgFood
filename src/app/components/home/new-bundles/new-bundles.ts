import { Component } from '@angular/core';
import { Bundle } from '../../../interfaces/bundle';
import { NewBundleCard } from '../new-bundle-card/new-bundle-card';
import { BundleService } from '../../../services/bundle-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-new-bundles',
  imports: [NewBundleCard],
  templateUrl: './new-bundles.html',
  styleUrl: './new-bundles.css',
})
export class NewBundles {
  newBundles: (Bundle & { imageUrl: string })[] = [];

  constructor(
    private bundleService: BundleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.bundleService.getLatestBundles().subscribe({
      next: (bundles) => {
        this.newBundles = bundles.map((bundle) => ({
          ...bundle,
          imageUrl: this.bundleService.getBundleImageUrl(bundle.id),
        }));
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading bundles:', err);
      },
    });
  }
}
