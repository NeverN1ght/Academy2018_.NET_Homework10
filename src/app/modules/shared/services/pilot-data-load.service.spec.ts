import { TestBed, inject } from '@angular/core/testing';

import { PilotDataLoadService } from './pilot-data-load.service';

describe('PilotDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotDataLoadService]
    });
  });

  it('should be created', inject([PilotDataLoadService], (service: PilotDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
