import { TestBed } from '@angular/core/testing';

import { TenantWebSignupService } from './tenant-web-signup.service';

describe('TenantWebSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenantWebSignupService = TestBed.get(TenantWebSignupService);
    expect(service).toBeTruthy();
  });
});
