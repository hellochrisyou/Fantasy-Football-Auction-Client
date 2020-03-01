import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSnakeComponent } from './pending-snake.component';

describe('PendingSnakeComponent', () => {
  let component: PendingSnakeComponent;
  let fixture: ComponentFixture<PendingSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingSnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
