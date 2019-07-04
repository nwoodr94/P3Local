import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantWebProfileComponent } from './tenant-web-profile.component';

describe('TenantWebProfileComponent', () => {
  let component: TenantWebProfileComponent;
  let fixture: ComponentFixture<TenantWebProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantWebProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantWebProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
