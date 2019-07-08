import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TenantWebSignupComponent } from './tenant-web-signup.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TenantWebSignupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule
  ],
  exports: [TenantWebSignupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenantWebSignupModule { }
