/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    };
    TenantWebSignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-tenant-web-signup',
                    template: "<!-- <mat-horizontal-stepper [linear] = \"isLinear\" #stepper>\r\n    <mat-step [stepControl] = \"firstFormGroup\">\r\n       <form [formGroup] = \"firstFormGroup\">\r\n          <ng-template matStepLabel>Enter your name</ng-template>\r\n          <mat-form-field>\r\n             <input matInput placeholder = \"Last name, First name\" formControlName = \"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n       </form>\r\n    </mat-step>\r\n    <mat-step [stepControl] = \"secondFormGroup\">\r\n       <form [formGroup] = \"secondFormGroup\">\r\n          <ng-template matStepLabel>Enter your address</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder = \"Address\" formControlName = \"secondCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n       </form>\r\n    </mat-step>\r\n    <mat-step>\r\n       <ng-template matStepLabel>Done</ng-template>\r\n          Details taken.\r\n       <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button (click) = \"stepper.reset()\">Reset</button>\r\n       </div>\r\n    </mat-step>\r\n </mat-horizontal-stepper> -->\r\n\r\n<mat-horizontal-stepper linear #stepper>\r\n\r\n  <mat-step [stepControl]=\"firstFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>First Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"First Name\" formControlName=\"firstCtrl\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Last Name\" formControlName=\"firstCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"secondFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <ng-template matStepLabel>Second Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Location\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Batch\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Permanent Address\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Emergency Contact\" formControlName=\"secondCtrl\" required>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Make of Car\" formControlName=\"secondCtrl\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Model of Car\" formControlName=\"secondCtrl\">\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"thirdFormGroup\" [completed]=\"false\">\r\n    <form [formGroup]=\"thirdFormGroup\">\r\n      <ng-template matStepLabel>Final Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"thirdCtrl\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Comfirm Password\" type=\"password\" formControlName=\"thirdCtrl\" required>\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Done</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>"
                }] }
    ];
    /** @nocollapse */
    TenantWebSignupComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return TenantWebSignupComponent;
}());
export { TenantWebSignupComponent };
if (false) {
    /** @type {?} */
    TenantWebSignupComponent.prototype.isLinear;
    /** @type {?} */
    TenantWebSignupComponent.prototype.firstFormGroup;
    /** @type {?} */
    TenantWebSignupComponent.prototype.secondFormGroup;
    /** @type {?} */
    TenantWebSignupComponent.prototype.thirdFormGroup;
    /**
     * @type {?}
     * @private
     */
    TenantWebSignupComponent.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LXdlYi1zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVuYW50LXdlYi1zaWdudXAvIiwic291cmNlcyI6WyJsaWIvdGVuYW50LXdlYi1zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEU7SUFZRSxrQ0FBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFMN0MsYUFBUSxHQUFHLElBQUksQ0FBQztJQUtnQyxDQUFDOzs7O0lBRWpELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZzZIQUFxQztpQkFFdEM7Ozs7Z0JBTk8sV0FBVzs7SUE0Qm5CLCtCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksd0JBQXdCOzs7SUFFbkMsNENBQWdCOztJQUNoQixrREFBMEI7O0lBQzFCLG1EQUEyQjs7SUFDM0Isa0RBQTBCOzs7OztJQUVkLGdEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdGVuYW50LXdlYi1zaWdudXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAndGVuYW50LXdlYi1zaWdudXAuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50V2ViU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaXNMaW5lYXIgPSB0cnVlO1xyXG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgdGhpcmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRoaXJkRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICB0aGlyZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19