import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/common/header/header.component';
import { SearchBarComponent } from '../../components/home/search-bar/search-bar.component';
import { FeaturedProductsComponent } from '../../components/home/featured-products/featured-products.component';
import { FeaturedProducersComponent } from '../../components/home/featured-producers/featured-producers.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    SearchBarComponent,
    FeaturedProductsComponent,
    FeaturedProducersComponent,
    NzLayoutModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
