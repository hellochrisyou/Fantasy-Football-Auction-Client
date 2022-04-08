import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDialogComponent } from './players-dialog.component';

describe('PlayersDialogComponent', () => {
  let component: PlayersDialogComponent;
  let fixture: ComponentFixture<PlayersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
