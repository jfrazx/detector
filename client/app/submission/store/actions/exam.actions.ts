import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Exam } from '../../models';

export enum ExamActionTypes {
  LOAD_EXAMS = '[Submissions] Load Exams',
  LOAD_EXAMS_FAIL = '[Submissions] Load Exams Fail',
  LOAD_EXAMS_SUCCESS = '[Submissions] Load Exams Success',

  UPDATE_EXAM = '[Submissions] Update Exam',
  UPDATE_EXAM_FAIL = '[Submissions] Update Exam Fail',
  UPDATE_EXAM_SUCCESS = '[Submissions] Update Exam Success',

  REMOVE_EXAM = '[Submissions] Remove Exam',
  REMOVE_EXAM_FAIL = '[Submissions] Remove Exam Fail',
  REMOVE_EXAM_SUCCESS = '[Submissions] Remove Exam Success',

  CREATE_EXAM = '[Submissions] Create Exam',
  CREATE_EXAM_FAIL = '[Submissions] Create Exam Fail',
  CREATE_EXAM_SUCCESS = '[Submissions] Create Exam Success',
}

export class LoadExams implements Action {
  readonly type = ExamActionTypes.LOAD_EXAMS;
}

export class LoadExamsFail implements Action {
  readonly type = ExamActionTypes.LOAD_EXAMS_FAIL;

  constructor(public payload: any) {}
}

export class LoadExamsSuccess implements Action {
  readonly type = ExamActionTypes.LOAD_EXAMS_SUCCESS;

  constructor(public payload: Exam[]) {}
}

export class ExamCreate implements Action {
  readonly type = ExamActionTypes.CREATE_EXAM;

  constructor(public payload: Exam) {}
}

export class ExamCreateFail implements Action {
  readonly type = ExamActionTypes.CREATE_EXAM_FAIL;

  constructor(public payload: any) {}
}

export class ExamCreateSuccess implements Action {
  readonly type = ExamActionTypes.CREATE_EXAM_SUCCESS;

  constructor(public payload: Exam) {}
}

export class ExamRemove implements Action {
  readonly type = ExamActionTypes.REMOVE_EXAM;

  constructor(public payload: Exam) {}
}

export class ExamRemoveFail implements Action {
  readonly type = ExamActionTypes.REMOVE_EXAM_FAIL;

  constructor(public payload: any) {}
}

export class ExamRemoveSuccess implements Action {
  readonly type = ExamActionTypes.REMOVE_EXAM_SUCCESS;

  constructor(public payload: Exam) {}
}

export class ExamUpdate implements Action {
  readonly type = ExamActionTypes.UPDATE_EXAM;

  constructor(public payload: Exam) {}
}

export class ExamUpdateFail implements Action {
  readonly type = ExamActionTypes.UPDATE_EXAM_FAIL;

  constructor(public payload: any) {}
}

export class ExamUpdateSuccess implements Action {
  readonly type = ExamActionTypes.UPDATE_EXAM_SUCCESS;

  constructor(public payload: Update<Exam>) {}
}

export type ExamActions =
  | LoadExams
  | LoadExamsFail
  | LoadExamsSuccess
  | ExamCreateFail
  | ExamCreateSuccess
  | ExamRemove
  | ExamRemoveFail
  | ExamRemoveSuccess
  | ExamUpdate
  | ExamUpdateFail
  | ExamUpdateSuccess;
