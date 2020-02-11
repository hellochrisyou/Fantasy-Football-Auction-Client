import { TestBed } from '@angular/core/testing';

import { MergeStatService } from './merge-stats.service';

describe('AuctionStatsService', () => {
  let service: MergeStatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeStatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
