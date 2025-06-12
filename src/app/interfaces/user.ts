import { SafeUrl } from '@angular/platform-browser';
import { Address } from './address';

export interface User {
  id: string;
  name: string;
  lastname: string;
  profilePicture: SafeUrl;
  email: string;
  password: string;
  gender: 'Male' | 'Female';
  birthdate: Date;
  phone: number;
  addresses?: Address[];
}
