import { TestBed } from '@angular/core/testing';

import { AuctionSortService } from '../service/auction-sort.service';

describe('AuctionSortService', () => {
  let service: AuctionSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
