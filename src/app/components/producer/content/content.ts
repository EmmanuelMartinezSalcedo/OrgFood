import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BrandService,
  BrandDto,
  SocialDto,
} from '../../../services/brand-service';
import {
  LucideAngularModule,
  LucideIconData,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { FeaturedProductCard } from '../../home/featured-product-card/featured-product-card';
import { ProductService, ProductDto } from '../../../services/product-service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LucideAngularModule, FeaturedProductCard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit {
  producer!: BrandDto;
  socials: SocialDto[] = [];
  products: ProductDto[] = [];

  linkIcon: LucideIconData = SquareArrowOutUpRight;

  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.brandService.getBrandById(id).subscribe((producer) => {
      this.producer = producer;

      this.productService.getAll().subscribe((allProducts) => {
        this.products = allProducts.filter((p) => p.brand_id === id);

        this.cdr.detectChanges();
      });
    });

    this.brandService.getSocialsByBrandId(id).subscribe((socials) => {
      this.socials = socials;
      this.cdr.detectChanges();
    });
  }

  get producerImage(): string {
    return this.brandService.getBrandImageUrl(this.producer.id);
  }

  getSocialName(social: SocialDto): string {
    const url = social.url.toLowerCase();
    if (url.includes('facebook.com')) return 'Facebook';
    if (url.includes('x.com') || url.includes('twitter.com')) return 'X';
    if (url.includes('tiktok.com')) return 'TikTok';
    if (url.includes('instagram.com')) return 'Instagram';
    if (url.includes('wa.me') || url.includes('whatsapp.com'))
      return 'Whatsapp';
    if (url.includes('youtube.com') || url.includes('youtu.be'))
      return 'Youtube';
    return 'Web Page';
  }
}
