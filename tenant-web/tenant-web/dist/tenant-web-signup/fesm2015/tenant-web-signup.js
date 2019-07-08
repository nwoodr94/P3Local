import { Injectable, ɵɵdefineInjectable, Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatStepperModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TenantWebSignupService {
    constructor() { }
}
TenantWebSignupService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TenantWebSignupService.ctorParameters = () => [];
/** @nocollapse */ TenantWebSignupService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TenantWebSignupService_Factory() { return new TenantWebSignupService(); }, token: TenantWebSignupService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TenantWebSignupComponent {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }
}
TenantWebSignupComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-tenant-web-signup',
                template: "<!-- <mat-horizontal-stepper [linear] = \"isLinear\" #stepper>\r\n    <mat-step [stepControl] = \"firstFormGroup\">\r\n       <form [formGroup] = \"firstFormGroup\">\r\n          <ng-template matStepLabel>Enter your name</ng-template>\r\n          <mat-form-field>\r\n             <input matInput placeholder = \"Last name, First name\" formControlName = \"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n       </form>\r\n    </mat-step>\r\n    <mat-step [stepControl] = \"secondFormGroup\">\r\n       <form [formGroup] = \"secondFormGroup\">\r\n          <ng-template matStepLabel>Enter your address</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder = \"Address\" formControlName = \"secondCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n       </form>\r\n    </mat-step>\r\n    <mat-step>\r\n       <ng-template matStepLabel>Done</ng-template>\r\n          Details taken.\r\n       <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button (click) = \"stepper.reset()\">Reset</button>\r\n       </div>\r\n    </mat-step>\r\n </mat-horizontal-stepper> -->\r\n\r\n<mat-horizontal-stepper linear #stepper>\r\n\r\n  <mat-step [stepControl]=\"firstFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>First Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"First Name\" formControlName=\"firstCtrl\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Last Name\" formControlName=\"firstCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"secondFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <ng-template matStepLabel>Second Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Location\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Batch\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Permanent Address\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Emergency Contact\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Make of Car\" formControlName=\"secondCtrl\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Model of Car\" formControlName=\"secondCtrl\">\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"thirdFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"thirdFormGroup\">\r\n      <ng-template matStepLabel>Final Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"thirdCtrl\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Comfirm Password\" type=\"password\" formControlName=\"thirdCtrl\" required>\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Done</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>"
            }] }
];
/** @nocollapse */
TenantWebSignupComponent.ctorParameters = () => [
    { type: FormBuilder }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TenantWebSignupModule {
}
TenantWebSignupModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

export { TenantWebSignupComponent, TenantWebSignupModule, TenantWebSignupService };
//# sourceMappingURL=tenant-web-signup.js.map
