import { TestBed } from '@angular/core/testing';

import { TenantWebProfileService } from './tenant-web-profile.service';

describe('TenantWebProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenantWebProfileService = TestBed.get(TenantWebProfileService);
    expect(service).toBeTruthy();
  });
});
