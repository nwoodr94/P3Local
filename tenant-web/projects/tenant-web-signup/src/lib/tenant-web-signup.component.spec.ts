import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantWebSignupComponent } from './tenant-web-signup.component';

describe('TenantWebSignupComponent', () => {
  let component: TenantWebSignupComponent;
  let fixture: ComponentFixture<TenantWebSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantWebSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantWebSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
