import { TestBed, inject } from '@angular/core/testing';

import { AirplaneTypeDataLoadService } from './airplane-type-data-load.service';

describe('AirplaneTypeDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirplaneTypeDataLoadService]
    });
  });

  it('should be created', inject([AirplaneTypeDataLoadService], (service: AirplaneTypeDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
