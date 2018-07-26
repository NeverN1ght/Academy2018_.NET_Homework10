import { TestBed, inject } from '@angular/core/testing';

import { AirplaneDataLoadService } from './airplane-data-load.service';

describe('AirplaneDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirplaneDataLoadService]
    });
  });

  it('should be created', inject([AirplaneDataLoadService], (service: AirplaneDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
