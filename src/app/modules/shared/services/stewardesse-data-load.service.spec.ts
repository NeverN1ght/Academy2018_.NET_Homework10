import { TestBed, inject } from '@angular/core/testing';

import { StewardesseDataLoadService } from './stewardesse-data-load.service';

describe('StewardesseDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StewardesseDataLoadService]
    });
  });

  it('should be created', inject([StewardesseDataLoadService], (service: StewardesseDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
