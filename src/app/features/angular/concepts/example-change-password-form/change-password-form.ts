import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { createEqualsValidator } from './equals-validator';

const upperLowerSymbolNumberRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

export interface ChangePasswordFormGroup {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.html',
  styleUrls: ['./change-password-form.scss']
})
export class ChangePasswordFormComponent {
  formGroup: FormGroup<ControlsOf<ChangePasswordFormGroup>>;

  constructor(formBuilder: NonNullableFormBuilder) {
    const validators = [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(upperLowerSymbolNumberRegex)
    ];

    const currentPassword = formBuilder.control('', validators);
    const newPassword = formBuilder.control('', validators);
    const confirmPassword = formBuilder.control('', validators);

    this.formGroup = formBuilder.group<ControlsOf<ChangePasswordFormGroup>>(
      {
        currentPassword,
        newPassword,
        confirmPassword
      },
      {
        validators: createEqualsValidator(newPassword, confirmPassword)
      }
    );
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
