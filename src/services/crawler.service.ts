import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type CrawlRow = { parent_url: string; url: string; _id: string };

@Injectable({
  providedIn: 'root',
})
export class CrawlerService {
  constructor(private http: HttpClient) {}

  checkValidUrl(url: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  crawl(url: string, depth: number): Observable<CrawlRow[]> {
    return this.http.post<any[]>('http://localhost:8000/api/crawl', {
      url,
      depth,
    });
  }
}
