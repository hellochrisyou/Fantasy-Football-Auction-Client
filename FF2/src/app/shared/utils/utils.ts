import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';

export const VALIDATE_ARRAY = (v: string | string[], match: (s: string) => string[]): boolean => {
    if (Array.isArray(v)) {
        let isValid = true;
        v.forEach((s: string) => {
            if (isValid && !match(s)) {
                isValid = false;
            }
        });
        return isValid;
    }
    return !!match(v as string);
};

export const FORM_MARK_TOUCHED = (x: AbstractControl): void => {
    const fg: FormGroup | FormArray = (x instanceof FormGroup) ? x as FormGroup : x as FormArray;

    Object.values(fg.controls).forEach((y: AbstractControl) => {
        if (y instanceof FormControl) {
            (y as FormControl).markAsTouched();
            (y as FormControl).updateValueAndValidity();
            return;
        }
    });
}