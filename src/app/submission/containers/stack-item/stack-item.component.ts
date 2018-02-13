import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Stack } from '../../models';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.css'],
})
export class StackItemComponent implements OnInit {
  stack$: Observable<Stack>;

  constructor(private store: Store<fromStore.SubmissionState>) {}

  ngOnInit() {
    this.stack$ = this.store.select(fromStore.getSelectedStack);
  }

  createStack(event: Stack): void {
    this.store.dispatch(new fromStore.StackCreate(event));
  }

  updateStack(event: Stack): void {
    this.store.dispatch(new fromStore.StackUpdate(event));
  }
}
