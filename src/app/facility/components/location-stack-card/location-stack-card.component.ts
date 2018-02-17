import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Stack } from '../../models';

const STACK_CARD_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LocationStackCardComponent),
  multi: true,
};

@Component({
  selector: 'app-location-stack-card',
  templateUrl: './location-stack-card.component.html',
  styleUrls: ['./location-stack-card.component.css'],
  providers: [STACK_CARD_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationStackCardComponent implements ControlValueAccessor {
  @Input() stacks: Stack[];

  included: Stack[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Stack[]) {
    this.included = value;
  }

  selectStack(stack: Stack) {
    if (this.inStacks(stack)) {
      this.included = this.included.filter(item => item._id !== stack._id);
    } else {
      this.included = [...this.included, stack];
    }

    this.onTouch();
    this.onModelChange(this.included);
  }

  private inStacks(stack: Stack): boolean {
    return this.included.some(item => item._id === stack._id);
  }
}
