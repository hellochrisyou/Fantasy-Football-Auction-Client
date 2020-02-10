import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAuctionComponent } from './join-auction.component';

describe('JoinAuctionComponent', () => {
  let component: JoinAuctionComponent;
  let fixture: ComponentFixture<JoinAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
