import {User} from './user.model';


export interface Message {
  id: number;
  message: string;
  user: User;
  friend: User
}

export interface MessageDTO{
  userId: number;
  friendId: number;
}

export interface SimpleMessageDTO{
  userId: number;
  friendId: number;
  message: string;
}
