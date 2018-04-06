import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
  Validators,
} from '@angular/forms';

import { Student } from '../../models';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnChanges {
  @Input() student: Student;

  @Output() create = new EventEmitter<Student>();

  @Output() update = new EventEmitter<Student>();

  exists = false;
  selectedLocation: string;

  form: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    location: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    if (this.student) {
      this.form.setValue(this.student);
    }
  }

  createStudent(form: NgForm): void {
    const { valid, value } = form;

    if (valid) {
      this.create.emit(value);
    }
  }

  updateStudent(form: NgForm): void {
    const { touched, valid, value } = form;

    if (valid && touched) {
      this.update.emit(value);
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
}
