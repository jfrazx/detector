import { Action } from '@ngrx/store';

import { Stack } from '../../models';

export enum StackActionTypes {
  LOAD_STACKS = '[Submissions] Load Stacks',
  LOAD_STACKS_FAIL = '[Submissions] Load Stacks Fail',
  LOAD_STACKS_SUCCESS = '[Submissions] Load Stacks Success',

  UPDATE_STACK = '[Submissions] Stack Update',
  UPDATE_STACK_FAIL = '[Submissions] Stack Update Fail',
  UPDATE_STACK_SUCCESS = '[Submissions] Stack Update Success',

  CREATE_STACK = '[Submissions] Stack Create',
  CREATE_STACK_FAIL = '[Submissions] Stack Create Fail',
  CREATE_STACK_SUCCESS = '[Submissions] Stack Create Success',

  REMOVE_STACK = '[Submissions] Stack Remove',
  REMOVE_STACK_FAIL = '[Submissions] Stack Remove Fail',
  REMOVE_STACK_SUCCESS = '[Submissions] Stack Remove Success',
}

export class LoadStacks implements Action {
  readonly type = StackActionTypes.LOAD_STACKS;
}

export class LoadStacksFail implements Action {
  readonly type = StackActionTypes.LOAD_STACKS_FAIL;

  constructor(public payload: any) {}
}

export class LoadStacksSuccess implements Action {
  readonly type = StackActionTypes.LOAD_STACKS_SUCCESS;

  constructor(public payload: Stack[]) {}
}

export class StackUpdate implements Action {
  readonly type = StackActionTypes.UPDATE_STACK;

  constructor(public payload: Stack) {}
}

export class StackUpdateFail implements Action {
  readonly type = StackActionTypes.UPDATE_STACK_FAIL;

  constructor(public payload: any) {}
}

export class StackUpdateSuccess implements Action {
  readonly type = StackActionTypes.UPDATE_STACK_SUCCESS;

  constructor(public payload: Stack) {}
}

export class StackCreate implements Action {
  readonly type = StackActionTypes.CREATE_STACK;

  constructor(public payload: Stack) {}
}

export class StackCreateFail implements Action {
  readonly type = StackActionTypes.CREATE_STACK_FAIL;

  constructor(public payload: any) {}
}

export class StackCreateSuccess implements Action {
  readonly type = StackActionTypes.CREATE_STACK_SUCCESS;

  constructor(public payload: Stack) {}
}

export class StackRemove implements Action {
  readonly type = StackActionTypes.REMOVE_STACK;

  constructor(public payload: Stack) {}
}

export class StackRemoveFail implements Action {
  readonly type = StackActionTypes.REMOVE_STACK_FAIL;

  constructor(public payload: any) {}
}

export class StackRemoveSuccess implements Action {
  readonly type = StackActionTypes.REMOVE_STACK_SUCCESS;

  constructor(public payload: Stack) {}
}

export type StackActions =
  | LoadStacks
  | LoadStacksFail
  | LoadStacksSuccess
  | StackCreate
  | StackCreateFail
  | StackCreateSuccess
  | StackUpdate
  | StackUpdateFail
  | StackUpdateSuccess
  | StackRemove
  | StackRemoveFail
  | StackRemoveSuccess;
