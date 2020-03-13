import { TestBed } from '@angular/core/testing';

import { QbStoreService } from './player-store.service';

describe('QbStoreService', () => {
  let service: QbStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QbStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
