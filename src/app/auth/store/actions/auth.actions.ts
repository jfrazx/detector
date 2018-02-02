import { Action } from '@ngrx/store';

import { User } from '../../../facility';

export enum AuthActionTypes {
  LOGIN_AUTH = '[Auth] Login',
  LOGIN_AUTH_SUCCESS = '[Auth] Login Success',
  LOGIN_AUTH_FAIL = '[Auth] Login Fail',

  LOGOUT_AUTH = '[Auth] Logout',
  LOGOUT_AUTH_SUCCESS = '[Auth] Logout Success',
  LOGOUT_AUTH_FAIL = '[Auth] Logout Fail',
}

export class AuthLogin implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH;
}

export class AuthLoginFail implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH_FAIL;

  constructor(public payload: any) {}
}

export class AuthLoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH_SUCCESS;

  constructor(public payload: User) {}
}

export class AuthLogout implements Action {
  readonly type = AuthActionTypes.LOGOUT_AUTH;
}

export class AuthLogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_AUTH_SUCCESS;

  constructor(public payload: User) {}
}

export class AuthLogoutFail implements Action {
  readonly type = AuthActionTypes.LOGOUT_AUTH_FAIL;

  constructor(public payload: any) {}
}

export type AuthActions =
  | AuthLogin
  | AuthLoginFail
  | AuthLoginSuccess
  | AuthLogout
  | AuthLogoutFail
  | AuthLogoutSuccess;
