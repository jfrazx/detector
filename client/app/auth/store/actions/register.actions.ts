import { Action } from '@ngrx/store';
import { Register } from '../../models';

export enum RegisterActionTypes {
  REGISTER_AUTH = '[Register] Registering',
  REGISTER_AUTH_SUCCESS = '[Register] Register Success',
  REGISTER_AUTH_FAIL = '[Register] Register Fail',
}

export class RegisterAuth implements Action {
  readonly type = RegisterActionTypes.REGISTER_AUTH;

  constructor(public payload: Register) {}
}

export class RegisterAuthSuccess implements Action {
  readonly type = RegisterActionTypes.REGISTER_AUTH_SUCCESS;
}

export class RegisterAuthFail implements Action {
  readonly type = RegisterActionTypes.REGISTER_AUTH_FAIL;
  constructor(public payload: any) {}
}

export type RegisterActions =
  | RegisterAuth
  | RegisterAuthFail
  | RegisterAuthSuccess;
