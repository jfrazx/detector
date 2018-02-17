import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Instructor } from '../../models';

const STACK_CARD_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LocationInstructorCardComponent),
  multi: true,
};

@Component({
  selector: 'app-location-instructor-card',
  templateUrl: './location-instructor-card.component.html',
  styleUrls: ['./location-instructor-card.component.css'],
  providers: [STACK_CARD_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationInstructorCardComponent implements ControlValueAccessor {
  @Input() instructors: Instructor[];

  included: Instructor[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Instructor[]) {
    this.included = value;
  }

  selectInstructor(instructor: Instructor) {
    if (this.inInstructors(instructor)) {
      this.included = this.included.filter(item => item.id !== instructor.id);
    } else {
      this.included = [...this.included, instructor];
    }

    this.onTouch();
    this.onModelChange(this.included);
  }

  private inInstructors(instructor: Instructor): boolean {
    return this.included.some(item => item.id === instructor.id);
  }
}
