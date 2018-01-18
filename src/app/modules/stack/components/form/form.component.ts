import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Stack } from '../../../../models';

@Component({
  selector: 'app-stack-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class StackFormComponent {
  @Input()
  stack: Stack = new Stack();

  @Output()
  stackEvent = new EventEmitter<Stack>();

  constructor() { }

  onSubmit(form: NgForm): void {
    this.stackEvent.emit(this.stack);
    this.stack = new Stack();
    form.reset();
  }
}
