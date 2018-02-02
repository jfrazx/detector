import { Action } from '@ngrx/store';

import { Exam } from '../../../submission';

export const LOAD_EXAMS = '[Exams] Load Exams';
export const LOAD_EXAMS_SUCCESS = '[Exams] Load Exams Success';
export const LOAD_EXAMS_FAIL = '[Exams] Load Exams Fail';

export class LoadExams implements Action {
  readonly type = LOAD_EXAMS;
}

export class LoadExamsSuccess implements Action {
  readonly type = LOAD_EXAMS_SUCCESS;

  constructor(public payload: Exam[]) {}
}

export class LoadExamsFail implements Action {
  readonly type = LOAD_EXAMS_FAIL;
  constructor(public payload: any) {}
}

export type ExamsAction = LoadExams | LoadExamsFail | LoadExamsSuccess;
