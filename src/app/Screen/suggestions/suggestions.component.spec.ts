import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SuggestionsComponent} from './suggestions.component';

describe('SuggestionsComponent', () => {
  let component: SuggestionsComponent;
  let fixture: ComponentFixture<SuggestionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SuggestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
