import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message, MessageDTO, SimpleMessageDTO} from '../model/message.model';
import {Observable} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class MessageService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080';

  public getAllMessages(message: MessageDTO): Observable<Message[]> {
    return this.http.post<Message[]>(this.baseUrl + '/message', message);

  }

  public saveAllMessages(message:SimpleMessageDTO) {
    return this.http.post(this.baseUrl + '/message/send', message).subscribe();

  }


}
