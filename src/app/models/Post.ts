import { User } from './User';
import { Thread } from './Thread';

export class Post {
  id: number;
  author: User;
  thread: Thread;
  text: string;
  createdAt: string;
}
