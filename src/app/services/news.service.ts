import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  API_URL: string = environment.apiUrl;
  API_KEY: string = environment.apiKey;
  newsDetail: any

  constructor(private http: HttpClient) {}

  getAllNews(url: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${url}&apiKey=${this.API_KEY}`);
  }
}
