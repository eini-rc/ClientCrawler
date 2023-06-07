import { Component } from '@angular/core';
import { CrawlerService } from 'src/services/crawler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crawler-client';

  urls: any[];

  constructor(private crawlerService: CrawlerService) {}

  crawl(url: string, depth: number) {
    this.crawlerService.crawl(url, depth).subscribe((response) => {
      this.urls = response;
    });
  }
}
