import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { StackService } from '../../services';
import { Stack } from '../../../../models';

@Component({
  selector: 'app-stack-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class StackNewComponent {
  @Output()
  newStack = new EventEmitter<Stack>();

  errors: string[] = [];

  constructor(private stackService: StackService) { }

  addStack(stack: Stack): void {
    const subscription: Subscription = this.stackService.create(stack)
      .subscribe(
        created => this.newStack.emit(created),
        (error) => {
          console.log(typeof error);
        },
        () => {
          console.log('complete');
          subscription.unsubscribe();
        }
      );
  }
}
