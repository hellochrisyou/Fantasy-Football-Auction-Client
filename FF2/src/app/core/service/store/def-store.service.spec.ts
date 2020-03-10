import { TestBed } from '@angular/core/testing';

import { DefStoreService } from './def-store.service';

describe('DefStoreService', () => {
  let service: DefStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
