import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrawlerFormComponent } from './crawler-form.component';

describe('CrawlerFormComponent', () => {
  let component: CrawlerFormComponent;
  let fixture: ComponentFixture<CrawlerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrawlerFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit crawl event on form submission', () => {
    spyOn(component.crawl, 'emit');
    component.url = 'https://example.com';
    component.depth = 2;
    component.onSubmit();
    expect(component.crawl.emit).toHaveBeenCalledWith({
      url: 'https://example.com',
      depth: 2,
    });
  });
});
