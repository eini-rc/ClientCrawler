import { Component } from '@angular/core';
import { CrawlerService } from 'src/services/crawler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  urls: any[] = [];
  depth: number = 1;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private crawlerService: CrawlerService) {}

  crawl(url: string, depth: number) {
    this.depth = depth;
    // reset prev list urls & error message before try to get new list
    this.urls = [];
    this.errorMessage = '';

    if (!this.crawlerService.checkValidUrl(url)) {
      this.urls = [];
      this.errorMessage = 'Invalid url';
      return;
    }

    // set isLoading true for display when data fetch
    this.isLoading = true;

    this.crawlerService.crawl(url, depth).subscribe((response) => {
      this.urls = response;
      this.isLoading = false;
    }),
      (error) => {
        this.urls = [];
        this.isLoading = false;
        this.errorMessage = error;
      };
  }
}
