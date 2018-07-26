import { TestBed, inject } from '@angular/core/testing';

import { CrewDataLoadService } from './crew-data-load.service';

describe('CrewDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewDataLoadService]
    });
  });

  it('should be created', inject([CrewDataLoadService], (service: CrewDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
