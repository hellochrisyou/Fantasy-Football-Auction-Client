import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCardComponent } from './highlight-card.component';

describe('HighlightCardComponent', () => {
  let component: HighlightCardComponent;
  let fixture: ComponentFixture<HighlightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
