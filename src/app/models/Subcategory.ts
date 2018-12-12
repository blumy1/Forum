import { Category } from './Category';

export class Subcategory {
  id: number;
  name: string;
  slug: string;
  category: Category;
  threadsAmount: number;
  postsAmount: number;
}
