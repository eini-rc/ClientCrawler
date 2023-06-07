import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrawlerService {
  constructor(private http: HttpClient) {}

  crawl(url: string, depth: number): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8000/api/crawl', {
      url,
      depth,
    });
  }
}
