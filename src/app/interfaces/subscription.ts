import { Bundle } from './bundle';

export interface Subscription {
  id: string;
  bundle: Bundle;
  delivery: number;
}
