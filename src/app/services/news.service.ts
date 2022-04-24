import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ce24838bbc4a41ca9fec0a57cce89466');
  }
}
