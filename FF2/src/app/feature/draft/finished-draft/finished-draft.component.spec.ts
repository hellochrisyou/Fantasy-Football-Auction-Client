import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedDraftComponent } from './finished-draft.component';

describe('FinishedDraftComponent', () => {
  let component: FinishedDraftComponent;
  let fixture: ComponentFixture<FinishedDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
