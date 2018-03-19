import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from '../../models';

export enum UserActionTypes {
  LOAD_USERS = '[Facilities] Load Users',
  LOAD_USERS_FAIL = '[Facilities] Load Users Fail',
  LOAD_USERS_SUCCESS = '[Facilities] Load Users Success',

  UPDATE_USER = '[Facilities] Update User',
  UPDATE_USER_FAIL = '[Facilities] Update User Fail',
  UPDATE_USER_SUCCESS = '[Facilities] Update User Success',

  REMOVE_USER = '[Facilities] Remove User',
  REMOVE_USER_FAIL = '[Facilities] Remove User Fail',
  REMOVE_USER_SUCCESS = '[Facilities] Remove User Success',

  CREATE_USER = '[Facilities] Create User',
  CREATE_USER_FAIL = '[Facilities] Create User Fail',
  CREATE_USER_SUCCESS = '[Facilities] Create User Success',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL;

  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {}
}

export class UserCreate implements Action {
  readonly type = UserActionTypes.CREATE_USER;

  constructor(public payload: User) {}
}

export class UserCreateFail implements Action {
  readonly type = UserActionTypes.CREATE_USER_FAIL;

  constructor(public payload: any) {}
}

export class UserCreateSuccess implements Action {
  readonly type = UserActionTypes.CREATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class UserRemove implements Action {
  readonly type = UserActionTypes.REMOVE_USER;

  constructor(public payload: User) {}
}

export class UserRemoveFail implements Action {
  readonly type = UserActionTypes.REMOVE_USER_FAIL;

  constructor(public payload: any) {}
}

export class UserRemoveSuccess implements Action {
  readonly type = UserActionTypes.REMOVE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class UserUpdate implements Action {
  readonly type = UserActionTypes.UPDATE_USER;

  constructor(public payload: User) {}
}

export class UserUpdateFail implements Action {
  readonly type = UserActionTypes.UPDATE_USER_FAIL;

  constructor(public payload: any) {}
}

export class UserUpdateSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USER_SUCCESS;

  constructor(public payload: Update<User>) {}
}

export type UserActions =
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess
  | UserCreateFail
  | UserCreateSuccess
  | UserRemove
  | UserRemoveFail
  | UserRemoveSuccess
  | UserUpdate
  | UserUpdateFail
  | UserUpdateSuccess;
