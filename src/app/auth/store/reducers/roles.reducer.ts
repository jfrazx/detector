import * as fromRoles from '../actions';
import { Role } from '../../models';

import { mapToEntities } from '../../../utils';

export interface RoleState {
  entities: { [id: string]: Role };
  loaded: boolean;
  loading: boolean;
  userRoles: string[];
}

export const initialState: RoleState = {
  entities: {},
  loaded: false,
  loading: false,
  userRoles: [],
};

export function reducer(
  state = initialState,
  action: fromRoles.RoleActions
): RoleState {
  switch (action.type) {
    case fromRoles.RoleActionTypes.LOAD_ROLES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromRoles.RoleActionTypes.LOAD_ROLES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
    case fromRoles.RoleActionTypes.LOAD_ROLES_SUCCESS: {
      const roles = action.payload;
      const entities = mapToEntities(state, roles);

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
  }

  return state;
}

export const getRoleEntities = (state: RoleState) => state.entities;
export const getRolesLoading = (state: RoleState) => state.loading;
export const getRolesLoaded = (state: RoleState) => state.loaded;
export const getUserRoles = (state: RoleState) => state.userRoles;
