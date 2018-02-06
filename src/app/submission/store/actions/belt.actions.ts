import { Action } from '@ngrx/store';

import { Belt } from '../../models';

export enum BeltActionTypes {
  LOAD_BELTS = '[Belt] Load Belts',
  LOAD_BELTS_FAIL = '[Belt] Load Belts Fail',
  LOAD_BELTS_SUCCESS = '[Belt] Load Belts Success',

  UPDATE_BELT = '[Belt] Update Belt',
  UPDATE_BELT_FAIL = '[Belt] Update Belt Fail',
  UPDATE_BELT_SUCCESS = '[Belt] Update Belt Success',

  REMOVE_BELT = '[Belt] Remove Belt',
  REMOVE_BELT_FAIL = '[Belt] Remove Belt Fail',
  REMOVE_BELT_SUCCESS = '[Belt] Remove Belt Success',

  CREATE_BELT = '[Belt] Create Belt',
  CREATE_BELT_FAIL = '[Belt] Create Belt Fail',
  CREATE_BELT_SUCCESS = '[Belt] Create Belt Success',
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
