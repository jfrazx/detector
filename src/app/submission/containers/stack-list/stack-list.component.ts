import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Stack } from '../../models';

import * as fromSubmissions from '../../store';

@Component({
  selector: 'app-stack-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class StackListComponent implements OnInit {
  stacks$: Observable<Stack[]>;
  selectedStack: Stack;

  constructor(private store: Store<fromSubmissions.SubmissionState>) {}

  ngOnInit() {
    this.stacks$ = this.store.select(fromSubmissions.getStacks);
    this.store.dispatch(new fromSubmissions.LoadStacks());
  }

  onDelete(event: Stack): void {
    console.log('deleting stack', event);
  }

  private selectStack(stack: Stack): void {
    this.selectedStack = this.selectedStack === stack ? null : stack;
  }
}
