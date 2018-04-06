import {
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
  Validators,
} from '@angular/forms';
import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { Location, Stack, User } from '../../models';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['location-form.component.scss'],
})
export class LocationFormComponent implements OnChanges {
  @Input() location: Location;
  @Input() stacks: Stack[];
  @Input() users: User[];

  @Output() create: EventEmitter<Location> = new EventEmitter<Location>();
  @Output() update: EventEmitter<Location> = new EventEmitter<Location>();

  cityFocus = false;
  exists = false;

  form: FormGroup = this.fb.group({
    city: ['', [Validators.required, Validators.minLength(3)]],
    stacks: [[]],
    instructors: [[]],
  });

  constructor(private fb: FormBuilder) {}

  get cityControl() {
    return this.form.get('city') as FormControl;
  }

  get cityInvalid() {
    return this.cityControl.invalid;
  }

  get cityValid() {
    return this.cityControl.valid;
  }

  get cityControlMinLength() {
    return this.cityControl.hasError('minlength') && this.cityControl.touched;
  }

  get cityControlRequired() {
    return this.cityControl.hasError('required') && this.cityControl.touched;
  }

  get cityPlaceHolderText() {
    return this.cityFocus ? 'city' : 'e.g. Seattle';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.location && this.location._id) {
      this.form.patchValue(this.location);
    }
  }

  createLocation(form: NgForm) {
    const { valid, value } = form;

    console.log('form content', value, valid);

    if (valid) {
      this.create.emit(value);
    }
  }

  updateLocation(form: NgForm) {
    const { touched, valid, value } = form;

    if (touched && valid) {
      this.update.emit(value);
    }
  }
}
