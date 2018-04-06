import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as studentActions from '../actions/student.actions';
import * as fromServices from '../../services';

import { Student } from '../../models';

@Injectable()
export class StudentEffects {
  @Effect()
  loadStudents$ = this.actions$
    .ofType(studentActions.StudentActionTypes.LOAD_STUDENTS)
    .pipe(
      switchMap(() =>
        this.studentService
          .getStudents()
          .pipe(
            map(students => new studentActions.LoadStudentsSuccess(students)),
            catchError(error => of(new studentActions.LoadStudentsFail(error)))
          )
      )
    );

  @Effect()
  createStudent$ = this.actions$
    .ofType(studentActions.StudentActionTypes.CREATE_STUDENT)
    .pipe(
      map((action: studentActions.StudentCreate) => action.payload),
      switchMap(student =>
        this.studentService
          .createStudent(student)
          .pipe(
            map(
              createdStudent =>
                new studentActions.StudentCreateSuccess(createdStudent)
            ),
            catchError(error => of(new studentActions.StudentCreateFail(error)))
          )
      )
    );

  @Effect()
  updateStudent$ = this.actions$
    .ofType(studentActions.StudentActionTypes.UPDATE_STUDENT)
    .pipe(
      map((action: studentActions.StudentUpdate) => action.payload),
      switchMap(student =>
        this.studentService
          .updateStudent(student)
          .pipe(
            map(
              updatedStudent =>
                new studentActions.StudentUpdateSuccess(
                  (updatedStudent as any) as Update<Student>
                )
            ),
            catchError(error => of(new studentActions.StudentUpdateFail(error)))
          )
      )
    );

  @Effect()
  removeStudent$ = this.actions$
    .ofType(studentActions.StudentActionTypes.REMOVE_STUDENT)
    .pipe(
      map((action: studentActions.StudentRemove) => action.payload),
      switchMap(student =>
        this.studentService
          .removeStudent(student)
          .pipe(
            map(() => new studentActions.StudentRemoveSuccess(student)),
            catchError(error => of(new studentActions.StudentRemoveFail(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private studentService: fromServices.StudentService
  ) {}
}
