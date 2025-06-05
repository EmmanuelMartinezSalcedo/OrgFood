import { Component } from '@angular/core';
import { bundles } from '../../../constants/mocks/bundles';
import { Bundle } from '../../../interfaces/bundle';
import { NewBundleCard } from '../new-bundle-card/new-bundle-card';

@Component({
  selector: 'app-new-bundles',
  imports: [NewBundleCard],
  templateUrl: './new-bundles.html',
  styleUrl: './new-bundles.css',
})
export class NewBundles {
  newBundles: Bundle[];

  constructor() {
    this.newBundles = [bundles[0], bundles[1], bundles[0]];
  }
}
