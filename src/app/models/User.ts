import { Rank } from './Rank';

export class User {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  rank?: Rank;
  createdAt?: string;
  imageUrl?: string;
}
