import { TestBed } from '@angular/core/testing';

import { LeagueStoreService } from './league-store.service';

describe('LeagueStoreService', () => {
  let service: LeagueStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
