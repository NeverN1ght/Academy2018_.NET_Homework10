import { TestBed, inject } from '@angular/core/testing';

import { TicketDataLoadService } from './ticket-data-load.service';

describe('TicketDataLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketDataLoadService]
    });
  });

  it('should be created', inject([TicketDataLoadService], (service: TicketDataLoadService) => {
    expect(service).toBeTruthy();
  }));
});
