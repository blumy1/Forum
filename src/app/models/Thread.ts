import { User } from './User';
import { Subcategory } from './Subcategory';

export class Thread {
  id: number;
  title: string;
  author: User;
  subcategory: Subcategory;
  createdAt: string;
  status: number;
}
