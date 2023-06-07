import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crawler-form',
  templateUrl: './crawler-form.component.html',
  styleUrls: ['./crawler-form.component.css'],
})
export class CrawlerFormComponent {
  @Output() crawl = new EventEmitter<{ url: string; depth: number }>();
  @Input() depth: number;

  url: string;

  onSubmit() {
    this.crawl.emit({ url: this.url, depth: this.depth });
  }
}
