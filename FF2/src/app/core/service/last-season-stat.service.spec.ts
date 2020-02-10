import { TestBed } from '@angular/core/testing';

import { LastSeasonStatService } from './last-season-stat.service';

describe('LastSeasonStatService', () => {
  let service: LastSeasonStatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastSeasonStatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
