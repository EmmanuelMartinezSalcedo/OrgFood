import { User } from './user';
export interface Comment {
  id: string;
  content: string;
  date: Date;
  user: User;
}
