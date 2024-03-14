import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appFieldMatchGroup]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppFieldMatchGroupDirective,
      multi: true,
    },
  ],
  standalone: true,
})

/**
 * Every value in the form group must be equal.
 */
export class AppFieldMatchGroupDirective implements Validator {
  @Input('appFieldMatchGroup') fields: string[] = [];

  validate(control: AbstractControl): ValidationErrors | null {
    return fieldMatchGroupValidator(this.fields)(control);
  }
}

export function fieldMatchGroupValidator(fields: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const values = fields.map((field) => control.get(field)?.value);
    const isValid = values.every((value) => value === values[0]);
    return isValid ? null : { fieldMatchGroup: true };
  };
}