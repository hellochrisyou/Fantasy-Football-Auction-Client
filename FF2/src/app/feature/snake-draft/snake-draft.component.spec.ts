import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeDraftComponent } from './snake-draft.component';

describe('SnakeDraftComponent', () => {
  let component: SnakeDraftComponent;
  let fixture: ComponentFixture<SnakeDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
