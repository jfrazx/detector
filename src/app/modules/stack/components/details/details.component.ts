import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { StackService } from '../../services';
import { Stack } from '../../../../models';

@Component({
  selector: 'app-stack-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class StackDetailsComponent {
  @Output()
  updateStack = new EventEmitter<Stack>();

  @Input()
  stack: Stack;

  constructor(private stackService: StackService) { }

  update(stack: Stack): void {
    const subscription: Subscription = this.stackService.update(stack)
      .subscribe(
        updated => this.updateStack.emit(updated),
        console.log,
        () => subscription.unsubscribe()
      );
  }
}
