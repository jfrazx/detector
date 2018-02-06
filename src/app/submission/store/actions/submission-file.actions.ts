import { Action } from '@ngrx/store';

import { SubmissionFile } from '../../models';

export enum SubmissionFileActionTypes {
  LOAD_SUBMISSION_FILES = '[Submissions] Load Submission Files',
  LOAD_SUBMISSION_FILES_FAIL = '[Submissions] Load Submission Files Fail',
  LOAD_SUBMISSION_FILES_SUCCESS = '[Submissions] Load Submission Files Success',

  UPDATE_SUBMISSION_FILE = '[Submissions] Submission File Update',
  UPDATE_SUBMISSION_FILE_FAIL = '[Submissions] Submission File Update Fail',
  UPDATE_SUBMISSION_FILE_SUCCESS = '[Submissions] Submission File Update Success',

  CREATE_SUBMISSION_FILE = '[Submissions] Submission File Create',
  CREATE_SUBMISSION_FILE_FAIL = '[Submissions] Submission File Create Fail',
  CREATE_SUBMISSION_FILE_SUCCESS = '[Submissions] Submission File Create Success',

  REMOVE_SUBMISSION_FILE = '[Submissions] Submission File Remove',
  REMOVE_SUBMISSION_FILE_FAIL = '[Submissions] Submission File Remove Fail',
  REMOVE_SUBMISSION_FILE_SUCCESS = '[Submissions] Submission File Remove Success',
}

export class LoadSubmissionFiles implements Action {
  readonly type = SubmissionFileActionTypes.LOAD_SUBMISSION_FILES;
}

export class LoadSubmissionFilesFail implements Action {
  readonly type = SubmissionFileActionTypes.LOAD_SUBMISSION_FILES_FAIL;

  constructor(public payload: any) {}
}

export class LoadSubmissionFilesSuccess implements Action {
  readonly type = SubmissionFileActionTypes.LOAD_SUBMISSION_FILES_SUCCESS;

  constructor(public payload: SubmissionFile[]) {}
}

export class SubmissionFileUpdate implements Action {
  readonly type = SubmissionFileActionTypes.UPDATE_SUBMISSION_FILE;

  constructor(public payload: SubmissionFile) {}
}

export class SubmissionFileUpdateFail implements Action {
  readonly type = SubmissionFileActionTypes.UPDATE_SUBMISSION_FILE_FAIL;

  constructor(public payload: any) {}
}

export class SubmissionFileUpdateSuccess implements Action {
  readonly type = SubmissionFileActionTypes.UPDATE_SUBMISSION_FILE_SUCCESS;

  constructor(public payload: SubmissionFile) {}
}

export class SubmissionFileCreate implements Action {
  readonly type = SubmissionFileActionTypes.CREATE_SUBMISSION_FILE;

  constructor(public payload: SubmissionFile) {}
}

export class SubmissionFileCreateFail implements Action {
  readonly type = SubmissionFileActionTypes.CREATE_SUBMISSION_FILE_FAIL;

  constructor(public payload: any) {}
}

export class SubmissionFileCreateSuccess implements Action {
  readonly type = SubmissionFileActionTypes.CREATE_SUBMISSION_FILE_SUCCESS;

  constructor(public payload: SubmissionFile) {}
}

export class SubmissionFileRemove implements Action {
  readonly type = SubmissionFileActionTypes.REMOVE_SUBMISSION_FILE;

  constructor(public payload: SubmissionFile) {}
}

export class SubmissionFileRemoveFail implements Action {
  readonly type = SubmissionFileActionTypes.REMOVE_SUBMISSION_FILE_FAIL;

  constructor(public payload: any) {}
}

export class SubmissionFileRemoveSuccess implements Action {
  readonly type = SubmissionFileActionTypes.REMOVE_SUBMISSION_FILE_SUCCESS;

  constructor(public payload: SubmissionFile) {}
}

export type SubmissionFileActions =
  | LoadSubmissionFiles
  | LoadSubmissionFilesFail
  | LoadSubmissionFilesSuccess
  | SubmissionFileCreate
  | SubmissionFileCreateFail
  | SubmissionFileCreateSuccess
  | SubmissionFileUpdate
  | SubmissionFileUpdateFail
  | SubmissionFileUpdateSuccess
  | SubmissionFileRemove
  | SubmissionFileRemoveFail
  | SubmissionFileRemoveSuccess;
