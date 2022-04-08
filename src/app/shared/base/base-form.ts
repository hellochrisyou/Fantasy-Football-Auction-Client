import { Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, map, filter } from 'rxjs/operators';
import { RequiredStateMatcher } from '../validator/error-state-matcher';
import { FORM_MARK_TOUCHED } from '../utils/utils';
export class CreateBaseForm implements OnInit, OnDestroy {

    public formGroup: FormGroup;
    public formArray: FormArray;
    public matcher = new RequiredStateMatcher();

    protected componentIdle: Subject<boolean> = new Subject();
    protected abstractControl: AbstractControl;

    constructor(
        public formBuilder: FormBuilder,
        protected changeDetectorRef: ChangeDetectorRef
    ) {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.componentIdle.next(true);
        this.componentIdle.complete();
    }

    public checkFieldNameError(fieldName: string): boolean {
        if (this.formGroup) {
            const formGroup: AbstractControl = this.formGroup.get(fieldName) as AbstractControl;
            return formGroup && formGroup.invalid && (formGroup.dirty || formGroup.touched);
        }
        return false;
    }

    execFOrmValidation(): void {
        FORM_MARK_TOUCHED(this.abstractControl);
    }
}
