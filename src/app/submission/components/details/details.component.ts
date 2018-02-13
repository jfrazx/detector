import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Stack } from '../../models';
import { StackService } from '../../services';

@Component({
  selector: 'app-stack-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class StackDetailsComponent {
  @Input() stack: Stack;

  @Output() deleteStack: EventEmitter<Stack> = new EventEmitter<Stack>();

  constructor(private stackService: StackService) {}

  delete(): void {
    if (confirm(`Are you sure you want to delete ${this.stack.name}`)) {
      this.deleteStack.emit(this.stack);
    }
  }
}
