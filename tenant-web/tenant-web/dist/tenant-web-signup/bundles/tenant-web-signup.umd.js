(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('tenant-web-signup', ['exports', '@angular/core', '@angular/forms', '@angular/material'], factory) :
    (global = global || self, factory(global['tenant-web-signup'] = {}, global.ng.core, global.ng.forms, global.ng.material));
}(this, function (exports, core, forms, material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantWebSignupService = /** @class */ (function () {
        function TenantWebSignupService() {
        }
        TenantWebSignupService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TenantWebSignupService.ctorParameters = function () { return []; };
        /** @nocollapse */ TenantWebSignupService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TenantWebSignupService_Factory() { return new TenantWebSignupService(); }, token: TenantWebSignupService, providedIn: "root" });
        return TenantWebSignupService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantWebSignupComponent = /** @class */ (function () {
        function TenantWebSignupComponent(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = true;
        }
        /**
         * @return {?}
         */
        TenantWebSignupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
            this.thirdFormGroup = this._formBuilder.group({
                thirdCtrl: ['', forms.Validators.required]
            });
        };
        TenantWebSignupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-tenant-web-signup',
                        template: "<!-- <mat-horizontal-stepper [linear] = \"isLinear\" #stepper>\r\n    <mat-step [stepControl] = \"firstFormGroup\">\r\n       <form [formGroup] = \"firstFormGroup\">\r\n          <ng-template matStepLabel>Enter your name</ng-template>\r\n          <mat-form-field>\r\n             <input matInput placeholder = \"Last name, First name\" formControlName = \"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n       </form>\r\n    </mat-step>\r\n    <mat-step [stepControl] = \"secondFormGroup\">\r\n       <form [formGroup] = \"secondFormGroup\">\r\n          <ng-template matStepLabel>Enter your address</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder = \"Address\" formControlName = \"secondCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n       </form>\r\n    </mat-step>\r\n    <mat-step>\r\n       <ng-template matStepLabel>Done</ng-template>\r\n          Details taken.\r\n       <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button (click) = \"stepper.reset()\">Reset</button>\r\n       </div>\r\n    </mat-step>\r\n </mat-horizontal-stepper> -->\r\n\r\n<mat-horizontal-stepper linear #stepper>\r\n\r\n  <mat-step [stepControl]=\"firstFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>First Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"First Name\" formControlName=\"firstCtrl\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Last Name\" formControlName=\"firstCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"secondFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <ng-template matStepLabel>Second Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Location\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Batch\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Permanent Address\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Emergency Contact\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Make of Car\" formControlName=\"secondCtrl\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Model of Car\" formControlName=\"secondCtrl\">\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"thirdFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"thirdFormGroup\">\r\n      <ng-template matStepLabel>Final Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"thirdCtrl\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Comfirm Password\" type=\"password\" formControlName=\"thirdCtrl\" required>\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Done</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>"
                    }] }
        ];
        /** @nocollapse */
        TenantWebSignupComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return TenantWebSignupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantWebSignupModule = /** @class */ (function () {
        function TenantWebSignupModule() {
        }
        TenantWebSignupModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TenantWebSignupComponent],
                        imports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatFormFieldModule,
                            material.MatInputModule,
                            material.MatButtonModule,
                            material.MatStepperModule
                        ],
                        exports: [TenantWebSignupComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return TenantWebSignupModule;
    }());

    exports.TenantWebSignupComponent = TenantWebSignupComponent;
    exports.TenantWebSignupModule = TenantWebSignupModule;
    exports.TenantWebSignupService = TenantWebSignupService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tenant-web-signup.umd.js.map
