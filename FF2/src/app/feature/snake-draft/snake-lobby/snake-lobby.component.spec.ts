import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeLobbyComponent } from './snake-lobby.component';

describe('SnakeLobbyComponent', () => {
  let component: SnakeLobbyComponent;
  let fixture: ComponentFixture<SnakeLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
