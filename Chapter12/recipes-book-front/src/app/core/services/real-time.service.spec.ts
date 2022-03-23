import { TestBed } from '@angular/core/testing';

import { RealTimeService } from './real-time.service';

describe('RealTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealTimeService = TestBed.get(RealTimeService);
    expect(service).toBeTruthy();
  });
});
