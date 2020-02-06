import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingDraftComponent } from './ongoing-draft.component';

describe('OngoingDraftComponent', () => {
  let component: OngoingDraftComponent;
  let fixture: ComponentFixture<OngoingDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
