import { TestBed, inject } from '@angular/core/testing';

import { FlightDataLoadService } from './flight-data-load.service';

describe('FlightDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightDataLoadService]
    });
  });

  it('should be created', inject([FlightDataLoadService], (service: FlightDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
