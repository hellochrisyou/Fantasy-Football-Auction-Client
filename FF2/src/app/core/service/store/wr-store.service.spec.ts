import { TestBed } from '@angular/core/testing';

import { WrStoreService } from './wr-store.service';

describe('WrStoreService', () => {
  let service: WrStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
