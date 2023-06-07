import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crawler-form',
  templateUrl: './crawler-form.component.html',
  styleUrls: ['./crawler-form.component.css'],
})
export class CrawlerFormComponent {
  url: string;
  depth: number;
  @Output() crawl = new EventEmitter<{ url: string; depth: number }>();

  onSubmit() {
    this.crawl.emit({ url: this.url, depth: this.depth });
  }
}
