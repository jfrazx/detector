import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { takeUntil, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromStore from '../../store';
import * as fromRouter from '../../../store';

import { Exam, Stack } from '../../models';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss'],
})
export class ExamItemComponent implements OnInit {
  exam$: Observable<Exam>;
  stacks$: Observable<Stack[]>;

  constructor(private store: Store<fromStore.SubmissionState>) {}

  ngOnInit() {
    this.exam$ = this.store.select(fromStore.getSelectedExam);
    this.stacks$ = this.store.select(fromStore.getStacks);

    this.store
      .select(fromStore.getStackLoaded)
      .pipe(tap(loaded => takeUntil(of(loaded))))
      .subscribe(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadStacks());
        }
      });
  }

  onCreate(event: Exam) {
    this.store.dispatch(new fromStore.ExamCreate(event));
  }

  onUpdate(event: Exam) {
    this.store.dispatch(new fromStore.ExamUpdate(event));
  }

  onBack() {
    this.store.dispatch(new fromRouter.Back());
  }
}
