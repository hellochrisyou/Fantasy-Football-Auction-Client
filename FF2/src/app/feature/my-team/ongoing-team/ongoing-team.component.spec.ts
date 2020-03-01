import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingTeamComponent } from './ongoing-team.component';

describe('OngoingTeamComponent', () => {
  let component: OngoingTeamComponent;
  let fixture: ComponentFixture<OngoingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
