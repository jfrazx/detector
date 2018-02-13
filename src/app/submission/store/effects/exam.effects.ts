import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as examActions from '../actions/exam.actions';
import * as fromServices from '../../services';

import { Exam } from '../../models';

@Injectable()
export class ExamEffects {
  @Effect()
  loadExams$ = this.actions$
    .ofType(examActions.ExamActionTypes.LOAD_EXAMS)
    .pipe(
      switchMap(() =>
        this.examService
          .getExams()
          .pipe(
            map(exams => new examActions.LoadExamsSuccess(exams)),
            catchError(error => of(new examActions.LoadExamsFail(error)))
          )
      )
    );

  @Effect()
  createExam$ = this.actions$
    .ofType(examActions.ExamActionTypes.CREATE_EXAM)
    .pipe(
      map((action: examActions.ExamCreate) => action.payload),
      switchMap(exam =>
        this.examService
          .createExam(exam)
          .pipe(
            map(createdExam => new examActions.ExamCreateSuccess(createdExam)),
            catchError(error => of(new examActions.ExamCreateFail(error)))
          )
      )
    );

  @Effect()
  updateExam$ = this.actions$
    .ofType(examActions.ExamActionTypes.UPDATE_EXAM)
    .pipe(
      map((action: examActions.ExamUpdate) => action.payload),
      switchMap(exam =>
        this.examService
          .updateExam(exam)
          .pipe(
            map(
              updatedExam =>
                new examActions.ExamUpdateSuccess(
                  (updatedExam as any) as Update<Exam>
                )
            ),
            catchError(error => of(new examActions.ExamUpdateFail(error)))
          )
      )
    );

  @Effect()
  removeExam$ = this.actions$
    .ofType(examActions.ExamActionTypes.REMOVE_EXAM)
    .pipe(
      map((action: examActions.ExamRemove) => action.payload),
      switchMap(exam =>
        this.examService
          .removeExam(exam)
          .pipe(
            map(() => new examActions.ExamRemoveSuccess(exam)),
            catchError(error => of(new examActions.ExamRemoveFail(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private examService: fromServices.ExamService
  ) {}
}
