import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuctionComponent } from './pending-auction.component';

describe('PendingAuctionComponent', () => {
  let component: PendingAuctionComponent;
  let fixture: ComponentFixture<PendingAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
