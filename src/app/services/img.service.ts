// src/app/services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:8080/getImage';

  constructor(private http: HttpClient) {}

  public getImage(imageName: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/`+imageName , {
      responseType: 'blob'
    });
  }
}
