import { TestBed } from '@angular/core/testing';

import { OfficeInfoService } from './office-info.service';

describe('OfficeInfoService', () => {
  let service: OfficeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
