import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLobbyComponent } from './auction-lobby.component';

describe('AuctionLobbyComponent', () => {
  let component: AuctionLobbyComponent;
  let fixture: ComponentFixture<AuctionLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
