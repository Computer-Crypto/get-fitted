import { TestBed } from '@angular/core/testing';

import { FitsService } from './fits.service';

describe('FitsService', () => {
  let service: FitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
