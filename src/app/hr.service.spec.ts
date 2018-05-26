import { TestBed, inject } from '@angular/core/testing';

import { HRService } from './hr.service';

describe('HRService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HRService]
    });
  });

  it('should be created', inject([HRService], (service: HRService) => {
    expect(service).toBeTruthy();
  }));
});
