import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDTO, UserUpdate} from '../model/user.model';
import {Page} from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080';

  public getUsers(): Observable<Page<UserDTO>> {
    return this.http.get<Page<UserDTO>>(`${this.baseUrl}/user`)
  }

  public getUsersByKeyword(
    keyword: string,
    pageNumber: number = 0,
    pageSize: number = 10
  ): Observable<Page<UserDTO>> {
    const params = new HttpParams()
      .set('keyword', keyword)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<UserDTO>>(`${this.baseUrl}/user`, {params});
  }

  public getUser(): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.baseUrl}/user/get-user`);
  }

  public updateUser(user: UserUpdate, userPicture: File) {
    const formData = new FormData();
    formData.append('updateUser', new Blob([JSON.stringify(user)], { type: 'application/json'}));
    formData.append('image', userPicture, userPicture.name);
    this.http.put('http://localhost:8080/user/edit', formData).subscribe({
      next: response => console.log('User updated successfully!', response),
      error: error => console.error('Update failed', error)
    });
  }

}
