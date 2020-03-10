import { TestBed } from '@angular/core/testing';

import { KStoreService } from './k-store.service';

describe('KStoreService', () => {
  let service: KStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
