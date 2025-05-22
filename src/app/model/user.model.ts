export class User {
  id: number = 0;
  name: string = "";
  email: string = "";
  password: string = "";
  img: string = "";
}

export class UserL{
  email: string ;
  password: string ;

  constructor(){
    this.email = "";
    this.password = "";

  }
}

export interface UserAuth {
  token: string;
  name: string;
  email: string;
  "userId": number;
}

export interface UserDTO{
  id: number;
  name: string;
  email: string;
  img: string;
}

export interface UserUpdate {
  id: number;
  name: string;
}

