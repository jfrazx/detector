import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as submissionActions from '../actions/submission.actions';
import * as fromServices from '../../services';

import { Submission } from '../../models';

@Injectable()
export class SubmissionEffects {
  @Effect()
  loadSubmissions$ = this.actions$
    .ofType(submissionActions.SubmissionActionTypes.LOAD_SUBMISSIONS)
    .pipe(
      switchMap(() =>
        this.submissionService
          .getSubmissions()
          .pipe(
            map(
              submissions =>
                new submissionActions.LoadSubmissionsSuccess(submissions)
            ),
            catchError(error =>
              of(new submissionActions.LoadSubmissionsFail(error))
            )
          )
      )
    );

  @Effect()
  createSubmission$ = this.actions$
    .ofType(submissionActions.SubmissionActionTypes.CREATE_SUBMISSION)
    .pipe(
      map((action: submissionActions.SubmissionCreate) => action.payload),
      switchMap(submission =>
        this.submissionService
          .createSubmission(submission)
          .pipe(
            map(
              createdSubmission =>
                new submissionActions.SubmissionCreateSuccess(createdSubmission)
            ),
            catchError(error =>
              of(new submissionActions.SubmissionCreateFail(error))
            )
          )
      )
    );

  @Effect()
  updateSubmission$ = this.actions$
    .ofType(submissionActions.SubmissionActionTypes.UPDATE_SUBMISSION)
    .pipe(
      map((action: submissionActions.SubmissionUpdate) => action.payload),
      switchMap(submission =>
        this.submissionService
          .updateSubmission(submission)
          .pipe(
            map(
              updatedSubmission =>
                new submissionActions.SubmissionUpdateSuccess(
                  (updatedSubmission as any) as Update<Submission>
                )
            ),
            catchError(error =>
              of(new submissionActions.SubmissionUpdateFail(error))
            )
          )
      )
    );

  @Effect()
  removeSubmission$ = this.actions$
    .ofType(submissionActions.SubmissionActionTypes.REMOVE_SUBMISSION)
    .pipe(
      map((action: submissionActions.SubmissionRemove) => action.payload),
      switchMap(submission =>
        this.submissionService
          .removeSubmission(submission)
          .pipe(
            map(
              () => new submissionActions.SubmissionRemoveSuccess(submission)
            ),
            catchError(error =>
              of(new submissionActions.SubmissionRemoveFail(error))
            )
          )
      )
    );

  constructor(
    private actions$: Actions,
    private submissionService: fromServices.SubmissionService
  ) {}
}
