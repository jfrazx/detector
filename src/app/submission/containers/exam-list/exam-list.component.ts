import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Exam } from '../../models';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {
  exams$: Observable<Exam[]>;

  constructor(private store: Store<fromStore.SubmissionState>) {}

  ngOnInit() {
    this.exams$ = this.store.select(fromStore.getExams);

    this.store.dispatch(new fromStore.LoadExams());
  }
}
