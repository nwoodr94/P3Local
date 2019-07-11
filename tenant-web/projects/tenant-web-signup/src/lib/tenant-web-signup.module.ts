import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TenantWebSignupComponent } from './tenant-web-signup.component';

@NgModule({
  declarations: [TenantWebSignupComponent],
  imports: [
  ],
  exports: [TenantWebSignupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TenantWebSignupModule { }
