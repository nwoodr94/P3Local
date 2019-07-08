import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TenantWebProfileComponent } from './tenant-web-profile.component';

@NgModule({
  declarations: [TenantWebProfileComponent],
  imports: [
  ],
  exports: [TenantWebProfileComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class TenantWebProfileModule { }
