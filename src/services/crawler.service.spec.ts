import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CrawlerFormComponent } from 'src/components/crawler-form/crawler-form.component';

describe('CrawlerFormComponent', () => {
  let component: CrawlerFormComponent;
  let fixture: ComponentFixture<CrawlerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
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
    const mockUrl = 'https://example.com';
    const mockDepth = 2;
    let emittedData: { url: string; depth: number } | undefined;

    component.crawl.subscribe((data) => {
      emittedData = data;
    });

    component.url = mockUrl;
    component.depth = mockDepth;
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(emittedData).toEqual({ url: mockUrl, depth: mockDepth });
  });
});
