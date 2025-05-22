import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FriendRequest, FriendRequestI} from '../model/friend.request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080';

  public sendFriendRequest(friendRequest: FriendRequest){
    this.http.post(`${this.baseUrl}/friend-request/send-friend-request`, friendRequest).subscribe();
  }

  public getFriendRequest(): Observable<FriendRequestI[]>{
    return this.http.get<FriendRequestI[]>(`${this.baseUrl}/friend-request`);
  }
  public acceptFriendRequest(id:number){
    return this.http.post(`${this.baseUrl}/friend-request/accept-friend-request`, id).subscribe();
  }

}
