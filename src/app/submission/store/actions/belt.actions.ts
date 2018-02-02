import { Action } from '@ngrx/store';

import { Belt } from '../../models';

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

export type BeltActions = LoadBelts | LoadBeltsFail | LoadBeltsSuccess;

export enum BeltActionTypes {
  LOAD_BELTS = '[Belt] Load Belts',
  LOAD_BELTS_UPDATE = '[Belt] Load Belts',
  BELT_UPDATE = '[Belt] Update Belt',
  LOAD_BELTS_FAIL = '[Belt] Load Belts Fail',
  LOAD_BELTS_SUCCESS = '[Belt] Load Belts Success',
}
