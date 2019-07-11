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
  validEmail: boolean;
  pwMatchMessage: string;
  pwGoodMessage: string;
  tenant: Tenant;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tenant= new Tenant();
    this.pwMatch=true;
    this.firstFormGroup = this._formBuilder.group({
      fn: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      ln: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      e: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.](?!edu){1}[a-zA-Z]{2,}')]]
    });
    this.secondFormGroup = this._formBuilder.group({
      l: ['', Validators.required],
      b: ['', Validators.required],
      a: ['', Validators.required],
      c: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      cma: [''],
      cmo: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      pw: ['', Validators.required],
      cfpw: ['', Validators.required]
    });
  }

  tenantCredentials() {
    this.tenant.firstName = this.firstFormGroup.get('fn').value;
    this.tenant.lastName = this.firstFormGroup.get('ln').value;
    this.tenant.email = this.firstFormGroup.get('e').value;
    //let v = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //console.log(v.test(String(this.tenant.email).toLowerCase()));
    console.log(this.tenant.firstName);
    console.log(this.tenant.lastName);
    console.log(this.tenant.email);
  }

  tenantDetails() {
    this.tenant.location = this.secondFormGroup.get('l').value;
    this.tenant.batch = this.secondFormGroup.get('b').value;
    this.tenant.address = this.secondFormGroup.get('a').value;
    this.tenant.contact = this.secondFormGroup.get('c').value;
    this.tenant.carMake = this.secondFormGroup.get('cma').value;
    this.tenant.carModel = this.secondFormGroup.get('cmo').value;
    console.log(this.tenant.location);
    console.log(this.tenant.batch);
    console.log(this.tenant.address);
    console.log(this.tenant.contact);
    console.log(this.tenant.carMake);
    console.log(this.tenant.carModel);
  }

  tenantPassword() {
    if (this.thirdFormGroup.get('pw').value=== this.thirdFormGroup.get('cfpw').value){
      this.tenant.password = this.thirdFormGroup.get('pw').value;
      //this.pwMatch = true;
      this.pwMatchMessage ="";
      this.pwGoodMessage = "Password Matched!";
    }
    else {
      //this.pwMatch = false;
      this.pwMatchMessage = "Password does not match";
      this.pwGoodMessage = "";
    }
    console.log(this.pwMatch);
    console.log(this.tenant.password);
  }

}
