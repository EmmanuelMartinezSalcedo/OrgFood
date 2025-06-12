import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { producers } from '../../../constants/mocks/producers';
import { FeaturedProducer } from '../../../interfaces/producer';
import { Social } from '../../../interfaces/social';
import {
  LucideAngularModule,
  LucideIconData,
  SquareArrowOutUpRight,
} from 'lucide-angular';
import { FeaturedProductCard } from '../../home/featured-product-card/featured-product-card';

@Component({
  selector: 'app-content',
  imports: [LucideAngularModule, FeaturedProductCard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  producer: FeaturedProducer;
  linkIcon: LucideIconData;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.producer = producers.find((p) => p.id === id || p.id === id)!;

    this.linkIcon = SquareArrowOutUpRight;
  }

  getSocialName(social: Social): string {
    const url = social.url.toString().toLowerCase();

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
