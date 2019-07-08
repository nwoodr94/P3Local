import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class TenantWebSignupComponent implements OnInit {
    private _formBuilder;
    isLinear: boolean;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
