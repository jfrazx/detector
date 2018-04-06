import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromUsers from '../actions';

import { User } from '../../models';

export interface UserState extends EntityState<User> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

console.log('user state ', initialState);

export function reducer(state = initialState, action: fromUsers.UserActions) {
  switch (action.type) {
    case fromUsers.UserActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromUsers.UserActionTypes.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromUsers.UserActionTypes.LOAD_USERS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromUsers.UserActionTypes.CREATE_USER_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromUsers.UserActionTypes.UPDATE_USER_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromUsers.UserActionTypes.REMOVE_USER_SUCCESS:
      return adapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}

export const getUserEntities = (state: UserState) => state.entities;
export const getUserLoading = (state: UserState) => state.loading;
export const getUserLoaded = (state: UserState) => state.loaded;
