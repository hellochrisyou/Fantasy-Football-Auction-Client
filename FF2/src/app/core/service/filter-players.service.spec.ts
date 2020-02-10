import { TestBed } from '@angular/core/testing';

import { FilterPlayersService } from './filter-players.service';

describe('FilterPlayersService', () => {
  let service: FilterPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
