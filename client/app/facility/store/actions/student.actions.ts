import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Student } from '../../models';

export enum StudentActionTypes {
  LOAD_STUDENTS = '[Facilities] Load Students',
  LOAD_STUDENTS_FAIL = '[Facilities] Load Students Fail',
  LOAD_STUDENTS_SUCCESS = '[Facilities] Load Students Success',

  UPDATE_STUDENT = '[Facilities] Update Student',
  UPDATE_STUDENT_FAIL = '[Facilities] Update Student Fail',
  UPDATE_STUDENT_SUCCESS = '[Facilities] Update Student Success',

  REMOVE_STUDENT = '[Facilities] Remove Student',
  REMOVE_STUDENT_FAIL = '[Facilities] Remove Student Fail',
  REMOVE_STUDENT_SUCCESS = '[Facilities] Remove Student Success',

  CREATE_STUDENT = '[Facilities] Create Student',
  CREATE_STUDENT_FAIL = '[Facilities] Create Student Fail',
  CREATE_STUDENT_SUCCESS = '[Facilities] Create Student Success',
}

export class LoadStudents implements Action {
  readonly type = StudentActionTypes.LOAD_STUDENTS;
}

export class LoadStudentsFail implements Action {
  readonly type = StudentActionTypes.LOAD_STUDENTS_FAIL;

  constructor(public payload: any) {}
}

export class LoadStudentsSuccess implements Action {
  readonly type = StudentActionTypes.LOAD_STUDENTS_SUCCESS;

  constructor(public payload: Student[]) {}
}

export class StudentCreate implements Action {
  readonly type = StudentActionTypes.CREATE_STUDENT;

  constructor(public payload: Student) {}
}

export class StudentCreateFail implements Action {
  readonly type = StudentActionTypes.CREATE_STUDENT_FAIL;

  constructor(public payload: any) {}
}

export class StudentCreateSuccess implements Action {
  readonly type = StudentActionTypes.CREATE_STUDENT_SUCCESS;

  constructor(public payload: Student) {}
}

export class StudentRemove implements Action {
  readonly type = StudentActionTypes.REMOVE_STUDENT;

  constructor(public payload: Student) {}
}

export class StudentRemoveFail implements Action {
  readonly type = StudentActionTypes.REMOVE_STUDENT_FAIL;

  constructor(public payload: any) {}
}

export class StudentRemoveSuccess implements Action {
  readonly type = StudentActionTypes.REMOVE_STUDENT_SUCCESS;

  constructor(public payload: Student) {}
}

export class StudentUpdate implements Action {
  readonly type = StudentActionTypes.UPDATE_STUDENT;

  constructor(public payload: Student) {}
}

export class StudentUpdateFail implements Action {
  readonly type = StudentActionTypes.UPDATE_STUDENT_FAIL;

  constructor(public payload: any) {}
}

export class StudentUpdateSuccess implements Action {
  readonly type = StudentActionTypes.UPDATE_STUDENT_SUCCESS;

  constructor(public payload: Update<Student>) {}
}

export type StudentActions =
  | LoadStudents
  | LoadStudentsFail
  | LoadStudentsSuccess
  | StudentCreateFail
  | StudentCreateSuccess
  | StudentRemove
  | StudentRemoveFail
  | StudentRemoveSuccess
  | StudentUpdate
  | StudentUpdateFail
  | StudentUpdateSuccess;
