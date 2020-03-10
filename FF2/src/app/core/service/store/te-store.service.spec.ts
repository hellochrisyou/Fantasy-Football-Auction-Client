import { TestBed } from '@angular/core/testing';

import { TeStoreService } from './te-store.service';

describe('TeStoreService', () => {
  let service: TeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
