import { Action } from '@ngrx/store';

import { Belt } from '../../models';

export enum BeltActionTypes {
  LOAD_BELTS = '[Submissions] Load Belts',
  LOAD_BELTS_FAIL = '[Submissions] Load Belts Fail',
  LOAD_BELTS_SUCCESS = '[Submissions] Load Belts Success',

  UPDATE_BELT = '[Submissions] Update Belt',
  UPDATE_BELT_FAIL = '[Submissions] Update Belt Fail',
  UPDATE_BELT_SUCCESS = '[Submissions] Update Belt Success',

  REMOVE_BELT = '[Submissions] Remove Belt',
  REMOVE_BELT_FAIL = '[Submissions] Remove Belt Fail',
  REMOVE_BELT_SUCCESS = '[Submissions] Remove Belt Success',

  CREATE_BELT = '[Submissions] Create Belt',
  CREATE_BELT_FAIL = '[Submissions] Create Belt Fail',
  CREATE_BELT_SUCCESS = '[Submissions] Create Belt Success',
}

export class LoadBelts implements Action {
  readonly type = BeltActionTypes.LOAD_BELTS;
}

export class LoadBeltsFail implements Action {
  readonly type = BeltActionTypes.LOAD_BELTS_FAIL;

  constructor(public payload: any) {}
}

export class LoadBeltsSuccess implements Action {
  readonly type = BeltActionTypes.LOAD_BELTS_SUCCESS;

  constructor(public payload: Belt[]) {}
}

export class BeltCreate implements Action {
  readonly type = BeltActionTypes.CREATE_BELT;

  constructor(public payload: Belt) {}
}

export class BeltCreateFail implements Action {
  readonly type = BeltActionTypes.CREATE_BELT_FAIL;

  constructor(public payload: any) {}
}

export class BeltCreateSuccess implements Action {
  readonly type = BeltActionTypes.CREATE_BELT_SUCCESS;

  constructor(public payload: Belt) {}
}

export class BeltRemove implements Action {
  readonly type = BeltActionTypes.REMOVE_BELT;

  constructor(public payload: Belt) {}
}

export class BeltRemoveFail implements Action {
  readonly type = BeltActionTypes.REMOVE_BELT_FAIL;

  constructor(public payload: any) {}
}

export class BeltRemoveSuccess implements Action {
  readonly type = BeltActionTypes.REMOVE_BELT_SUCCESS;

  constructor(public payload: Belt) {}
}

export class BeltUpdate implements Action {
  readonly type = BeltActionTypes.UPDATE_BELT;

  constructor(public payload: Belt) {}
}

export class BeltUpdateFail implements Action {
  readonly type = BeltActionTypes.UPDATE_BELT_FAIL;

  constructor(public payload: any) {}
}

export class BeltUpdateSuccess implements Action {
  readonly type = BeltActionTypes.UPDATE_BELT_SUCCESS;

  constructor(public payload: Belt) {}
}

export type BeltActions =
  | LoadBelts
  | LoadBeltsFail
  | LoadBeltsSuccess
  | BeltCreateFail
  | BeltCreateSuccess
  | BeltRemove
  | BeltRemoveFail
  | BeltRemoveSuccess
  | BeltUpdate
  | BeltUpdateFail
  | BeltUpdateSuccess;
