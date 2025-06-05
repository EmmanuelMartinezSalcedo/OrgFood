import { SafeUrl } from '@angular/platform-browser';

export interface User {
  id: string;
  name: string;
  lastname: string;
  profilePicture: SafeUrl;
}
