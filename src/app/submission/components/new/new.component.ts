import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { StackService } from '../../services';
import { Stack } from '../../models';

@Component({
  selector: 'app-stack-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class StackNewComponent {
  errors: string[] = [];

  constructor(private stackService: StackService, private router: Router) {}

  addStack(stack: Stack): void {
    console.log('stack event add trigger', stack);

    const subscription: Subscription = this.stackService
      .createStack(stack)
      .subscribe(
        () => this.router.navigateByUrl('stacks'),
        error => {
          console.log(error.message);
        },
        () => {
          console.log('complete');
          subscription.unsubscribe();
        }
      );
  }
}
