import { Action } from '@ngrx/store';

import { Submission } from '../../models';

export enum SubmissionActionTypes {
  LOAD_SUBMISSIONS = '[Submissions] Load Submissions',
  LOAD_SUBMISSIONS_FAIL = '[Submissions] Load Submissions Fail',
  LOAD_SUBMISSIONS_SUCCESS = '[Submissions] Load Submissions Success',

  UPDATE_SUBMISSION = '[Submissions] Submission Update',
  UPDATE_SUBMISSION_FAIL = '[Submissions] Submission Update Fail',
  UPDATE_SUBMISSION_SUCCESS = '[Submissions] Submission Update Success',

  CREATE_SUBMISSION = '[Submissions] Submission Create',
  CREATE_SUBMISSION_FAIL = '[Submissions] Submission Create Fail',
  CREATE_SUBMISSION_SUCCESS = '[Submissions] Submission Create Success',

  REMOVE_SUBMISSION = '[Submissions] Submission Remove',
  REMOVE_SUBMISSION_FAIL = '[Submissions] Submission Remove Fail',
  REMOVE_SUBMISSION_SUCCESS = '[Submissions] Submission Remove Success',
}

export class LoadSubmissions implements Action {
  readonly type = SubmissionActionTypes.LOAD_SUBMISSIONS;
}

export class LoadSubmissionsFail implements Action {
  readonly type = SubmissionActionTypes.LOAD_SUBMISSIONS_FAIL;

  constructor(public payload: any) {}
}

export class LoadSubmissionsSuccess implements Action {
  readonly type = SubmissionActionTypes.LOAD_SUBMISSIONS_SUCCESS;

  constructor(public payload: Submission[]) {}
}

export class SubmissionUpdate implements Action {
  readonly type = SubmissionActionTypes.UPDATE_SUBMISSION;

  constructor(public payload: Submission) {}
}

export class SubmissionUpdateFail implements Action {
  readonly type = SubmissionActionTypes.UPDATE_SUBMISSION_FAIL;

  constructor(public payload: any) {}
}

export class SubmissionUpdateSuccess implements Action {
  readonly type = SubmissionActionTypes.UPDATE_SUBMISSION_SUCCESS;

  constructor(public payload: Submission) {}
}

export class SubmissionCreate implements Action {
  readonly type = SubmissionActionTypes.CREATE_SUBMISSION;

  constructor(public payload: Submission) {}
}

export class SubmissionCreateFail implements Action {
  readonly type = SubmissionActionTypes.CREATE_SUBMISSION_FAIL;

  constructor(public payload: any) {}
}

export class SubmissionCreateSuccess implements Action {
  readonly type = SubmissionActionTypes.CREATE_SUBMISSION_SUCCESS;

  constructor(public payload: Submission) {}
}

export class SubmissionRemove implements Action {
  readonly type = SubmissionActionTypes.REMOVE_SUBMISSION;

  constructor(public payload: Submission) {}
}

export class SubmissionRemoveFail implements Action {
  readonly type = SubmissionActionTypes.REMOVE_SUBMISSION_FAIL;

  constructor(public payload: any) {}
}

export class SubmissionRemoveSuccess implements Action {
  readonly type = SubmissionActionTypes.REMOVE_SUBMISSION_SUCCESS;

  constructor(public payload: Submission) {}
}

export type SubmissionActions =
  | LoadSubmissions
  | LoadSubmissionsFail
  | LoadSubmissionsSuccess
  | SubmissionCreate
  | SubmissionCreateFail
  | SubmissionCreateSuccess
  | SubmissionUpdate
  | SubmissionUpdateFail
  | SubmissionUpdateSuccess
  | SubmissionRemove
  | SubmissionRemoveFail
  | SubmissionRemoveSuccess;
