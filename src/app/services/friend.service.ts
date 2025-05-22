import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FriendI} from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080';

  public getAllFriend(): Observable<FriendI[]>{
    return this.http.get<FriendI[]>(this.baseUrl + '/friend');
  }}
