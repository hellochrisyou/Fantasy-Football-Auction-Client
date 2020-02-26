import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSnakeComponent } from './join-snake.component';

describe('JoinSnakeComponent', () => {
  let component: JoinSnakeComponent;
  let fixture: ComponentFixture<JoinSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinSnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
