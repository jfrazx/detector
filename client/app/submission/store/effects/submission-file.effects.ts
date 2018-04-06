import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as submissionFileActions from '../actions/submission-file.actions';
import * as fromServices from '../../services';

import { SubmissionFile } from '../../models';

@Injectable()
export class SubmissionFileEffects {
  @Effect()
  loadSubmissionFiles$ = this.actions$
    .ofType(
      submissionFileActions.SubmissionFileActionTypes.LOAD_SUBMISSION_FILES
    )
    .pipe(
      switchMap(() =>
        this.submissionFileService
          .getSubmissionFiles()
          .pipe(
            map(
              SubmissionFiles =>
                new submissionFileActions.LoadSubmissionFilesSuccess(
                  SubmissionFiles
                )
            ),
            catchError(error =>
              of(new submissionFileActions.LoadSubmissionFilesFail(error))
            )
          )
      )
    );

  @Effect()
  createSubmissionFile$ = this.actions$
    .ofType(
      submissionFileActions.SubmissionFileActionTypes.CREATE_SUBMISSION_FILE
    )
    .pipe(
      map(
        (action: submissionFileActions.SubmissionFileCreate) => action.payload
      ),
      switchMap(submissionFile =>
        this.submissionFileService
          .createSubmissionFile(submissionFile)
          .pipe(
            map(
              createdSubmissionFile =>
                new submissionFileActions.SubmissionFileCreateSuccess(
                  createdSubmissionFile
                )
            ),
            catchError(error =>
              of(new submissionFileActions.SubmissionFileCreateFail(error))
            )
          )
      )
    );

  @Effect()
  updateSubmissionFile$ = this.actions$
    .ofType(
      submissionFileActions.SubmissionFileActionTypes.UPDATE_SUBMISSION_FILE
    )
    .pipe(
      map(
        (action: submissionFileActions.SubmissionFileUpdate) => action.payload
      ),
      switchMap(submissionFile =>
        this.submissionFileService
          .updateSubmissionFile(submissionFile)
          .pipe(
            map(
              updatedSubmissionFile =>
                new submissionFileActions.SubmissionFileUpdateSuccess(
                  (updatedSubmissionFile as any) as Update<SubmissionFile>
                )
            ),
            catchError(error =>
              of(new submissionFileActions.SubmissionFileUpdateFail(error))
            )
          )
      )
    );

  @Effect()
  removeSubmissionFile$ = this.actions$
    .ofType(
      submissionFileActions.SubmissionFileActionTypes.REMOVE_SUBMISSION_FILE
    )
    .pipe(
      map(
        (action: submissionFileActions.SubmissionFileRemove) => action.payload
      ),
      switchMap(submissionFile =>
        this.submissionFileService
          .removeSubmissionFile(submissionFile)
          .pipe(
            map(
              () =>
                new submissionFileActions.SubmissionFileRemoveSuccess(
                  submissionFile
                )
            ),
            catchError(error =>
              of(new submissionFileActions.SubmissionFileRemoveFail(error))
            )
          )
      )
    );

  constructor(
    private actions$: Actions,
    private submissionFileService: fromServices.SubmissionFileService
  ) {}
}
