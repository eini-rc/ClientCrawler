import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CrawlerFormComponent } from './crawler-form/crawler-form.component';
import { CrawlerResultsComponent } from './crawler-results/crawler-results.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent, CrawlerFormComponent, CrawlerResultsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
