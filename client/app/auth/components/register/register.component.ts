import { Component, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  NgForm,
  FormControl,
} from '@angular/forms';

import { Register } from '../../models';
import { Location } from '../../../facility';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  @Input() locations: Location[];

  register = new EventEmitter<Register>();

  form: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    location: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  registerUser(form: NgForm) {
    const { value, valid } = form;

    console.log(value);

    if (valid) {
      this.register.emit(value);
    }
  }

  get firstNameControl() {
    return this.form.get('first_name') as FormControl;
  }

  get firstNameInvalid() {
    return this.firstNameControl.invalid;
  }

  get firstNameValid() {
    return this.firstNameControl.valid;
  }

  get lastNameControl() {
    return this.form.get('last_name') as FormControl;
  }

  get lastNameInvalid() {
    return this.lastNameControl.invalid;
  }

  get lastNameValid() {
    return this.lastNameControl.valid;
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  get emailInvalid() {
    return this.emailControl.invalid;
  }

  get emailValid() {
    return this.emailControl.valid;
  }

  get locationControl() {
    return this.form.get('location') as FormControl;
  }

  get locationInvalid() {
    return this.locationControl.invalid;
  }

  get locationValid() {
    return this.locationControl.valid;
  }

  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  get passwordInvalid() {
    return this.passwordControl.invalid;
  }

  get passwordValid() {
    return this.passwordControl.valid;
  }

  get passwordLength() {
    return (
      this.passwordControl.hasError('minlength') && this.passwordControl.touched
    );
  }
}
