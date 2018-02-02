import { Action } from '@ngrx/store';

import { Role } from '../../models';

export enum RoleActionTypes {
  LOAD_ROLES = '[Roles] Load Roles',
  LOAD_ROLES_SUCCESS = '[Roles] Load Roles Success',
  LOAD_ROLES_FAIL = '[Roles] Load Roles Fail',

  CREATE_ROLE = '[Auth] Create Role',
  CREATE_ROLE_FAIL = '[Auth] Create Role Fail',
  CREATE_ROLE_SUCCESS = '[Auth] Create Role Success',

  UPDATE_ROLE = '[Auth] Update Role',
  UPDATE_ROLE_FAIL = '[Auth] Update Role Fail',
  UPDATE_ROLE_SUCCESS = '[Auth] Update Role Success',

  REMOVE_ROLE = '[Auth] Remove Role',
  REMOVE_ROLE_FAIL = '[Auth] Remove Role Fail',
  REMOVE_ROLE_SUCCESS = '[Auth] Remove Role Success',
}

export class LoadRoles implements Action {
  readonly type = RoleActionTypes.LOAD_ROLES;
}

export class LoadRolesSuccess implements Action {
  readonly type = RoleActionTypes.LOAD_ROLES_SUCCESS;

  constructor(public payload: Role[]) {}
}

export class LoadRolesFail implements Action {
  readonly type = RoleActionTypes.LOAD_ROLES_FAIL;
  constructor(public payload: any) {}
}

export class CreateRole implements Action {
  readonly type = RoleActionTypes.CREATE_ROLE;

  constructor(public payload: Role) {}
}

export class CreateRoleFail implements Action {
  readonly type = RoleActionTypes.CREATE_ROLE_FAIL;

  constructor(public payload: any) {}
}
export class CreateRoleSuccess implements Action {
  readonly type = RoleActionTypes.CREATE_ROLE_SUCCESS;

  constructor(public payload: Role) {}
}

export class UpdateRole implements Action {
  readonly type = RoleActionTypes.UPDATE_ROLE;

  constructor(public payload: Role) {}
}

export class UpdateRoleFail implements Action {
  readonly type = RoleActionTypes.UPDATE_ROLE_FAIL;

  constructor(public payload: any) {}
}

export class UpdateRoleSuccess implements Action {
  readonly type = RoleActionTypes.UPDATE_ROLE_SUCCESS;

  constructor(public payload: Role) {}
}

export class RemoveRole implements Action {
  readonly type = RoleActionTypes.REMOVE_ROLE;

  constructor(public payload: Role) {}
}

export class RemoveRoleFail implements Action {
  readonly type = RoleActionTypes.REMOVE_ROLE_FAIL;

  constructor(public payload: any) {}
}

export class RemoveRoleSuccess implements Action {
  readonly type = RoleActionTypes.REMOVE_ROLE_SUCCESS;

  constructor(public payload: Role) {}
}

export type RoleActions =
  | LoadRoles
  | LoadRolesSuccess
  | LoadRolesFail
  | CreateRole
  | CreateRoleFail
  | CreateRoleSuccess
  | UpdateRole
  | UpdateRoleFail
  | UpdateRoleSuccess
  | RemoveRole
  | RemoveRoleFail
  | RemoveRoleSuccess;
