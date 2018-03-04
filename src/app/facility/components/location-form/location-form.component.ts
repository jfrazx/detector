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
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { Location, Stack, Instructor } from '../../models';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.test.html',
  styleUrls: ['location-form.component.scss'],
})
export class LocationFormComponent implements OnInit, OnChanges {
  @Input() location: Location;
  @Input() stacks: Stack[];
  @Input() instructors: Instructor[];

  @Output() create: EventEmitter<Location> = new EventEmitter<Location>();
  @Output() update: EventEmitter<Location> = new EventEmitter<Location>();

  locationFocus = false;

  form: FormGroup = this.fb.group({
    location: ['', [Validators.required, Validators.minLength(3)]],
    stacks: [[]],
    instructors: [[]],
  });

  constructor(private fb: FormBuilder) {}

  get locationControl() {
    return this.form.get('location') as FormControl;
  }

  get locationInvalid() {
    return this.locationControl.invalid;
  }

  get locationValid() {
    return this.locationControl.valid;
  }

  get locationControlMinLength() {
    return (
      this.locationControl.hasError('minlength') && this.locationControl.touched
    );
  }

  get locationControlRequired() {
    return (
      this.locationControl.hasError('required') && this.locationControl.touched
    );
  }

  get locationPlaceHolderText() {
    return this.locationFocus ? 'Location' : 'e.g. Seattle';
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.location && this.location._id) {
      this.form.patchValue(this.location);
    }
  }

  createLocation(form: NgForm) {
    const { valid, value } = form;

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
