import { TestBed } from '@angular/core/testing';

import { CentralInfoService } from './central-info.service';

describe('CentralInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentralInfoService = TestBed.get(CentralInfoService);
    expect(service).toBeTruthy();
  });
});
