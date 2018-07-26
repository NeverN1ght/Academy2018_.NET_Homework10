import { TestBed, inject } from '@angular/core/testing';

import { DepartureDataLoadService } from './departure-data-load.service';

describe('DepartureDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartureDataLoadService]
    });
  });

  it('should be created', inject([DepartureDataLoadService], (service: DepartureDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
