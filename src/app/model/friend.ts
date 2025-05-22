import {User} from './user.model';

export interface FriendI {
  id: number;
  user: User;
  friend: User;
}
