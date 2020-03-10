import { TestBed } from '@angular/core/testing';

import { RbStoreService } from './rb-store.service';

describe('RbStoreService', () => {
  let service: RbStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RbStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
