import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crawler-results',
  templateUrl: './crawler-results.component.html',
  styleUrls: ['./crawler-results.component.css'],
})
export class CrawlerResultsComponent {
  @Input() urls: any[] = [];
  @Input() isLoading: boolean = false;
  @Input() errorMessage: string = '';
}
