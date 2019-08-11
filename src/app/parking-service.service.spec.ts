import { TestBed, inject } from '@angular/core/testing';

import { ParkingServiceService } from './parking-service.service';

describe('ParkingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingServiceService]
    });
  });

  it('should be created', inject([ParkingServiceService], (service: ParkingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
