import {User} from './user.model';

export interface FriendRequest {
  userId: number;
  friendId: number;
}

export interface FriendRequestI {
  id: number;
  user: User;
  friend: User;
}
