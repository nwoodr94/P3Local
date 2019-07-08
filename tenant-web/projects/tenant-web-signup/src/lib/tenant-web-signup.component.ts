import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Tenant } from '../tenant';

@Component({
  selector: 'lib-tenant-web-signup',
  templateUrl: 'tenant-web-signup.html',
  styles: []
})

export class TenantWebSignupComponent implements OnInit {
  pwMatch: boolean;
  tenant: Tenant;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tenant= new Tenant();

    this.firstFormGroup = this._formBuilder.group({
      fn: ['', Validators.required],
      ln: ['', Validators.required],
      e: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      l: ['', Validators.required],
      b: ['', Validators.required],
      a: ['', Validators.required],
      c: ['', Validators.required],
      cma: ['', Validators.required],
      cmo: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  tenantCredentials() {
    this.tenant.firstName = this.firstFormGroup.get('fn').value;
    this.tenant.lastName = this.firstFormGroup.get('ln').value;
    this.tenant.email = this.firstFormGroup.get('e').value;
    console.log(this.tenant.firstName);
    console.log(this.tenant.lastName);
    console.log(this.tenant.email);
  }

  tenantDetails() {
    this.tenant.location = this.secondFormGroup.get('l').value;
    this.tenant.batch = this.secondFormGroup.get('b').value;
    this.tenant.address = this.secondFormGroup.get('a').value;
    this.tenant.contact = contact;
    this.tenant.carMake = carMake;
    this.tenant.carModel = carModel;
  }

  tenantPassword() {
    if (password === confirmPass){
      this.tenant.password = password;
      this.tenant.confirmPass = confirmPass;
      this.pwMatch = true;
    }
    else {
      this.pwMatch = false;
    }
  }
  

}
