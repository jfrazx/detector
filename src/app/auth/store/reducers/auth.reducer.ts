import * as fromAuth from '../actions';
import { User } from '../../../admin';

import { mapToEntities } from '../../../utils';

export interface AuthState {
  currentUser: User;
  loggedIn: boolean;
  loggingIn: boolean;
  loggingOut: boolean;
}

export const initialState: AuthState = {
  currentUser: null,
  loggedIn: false,
  loggingIn: false,
  loggingOut: false,
};

export function reducer(
  state = initialState,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.AuthActionTypes.LOGIN_AUTH: {
      return {
        ...state,
        loggingIn: true,
      };
    }
    case fromAuth.AuthActionTypes.LOGIN_AUTH_FAIL: {
      return {
        ...state,
        loggingIn: false,
      };
    }
    case fromAuth.AuthActionTypes.LOGIN_AUTH_SUCCESS: {
      const currentUser = action.payload;

      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        currentUser,
      };
    }
    case fromAuth.AuthActionTypes.LOGOUT_AUTH: {
      return {
        ...state,
        loggingOut: true,
      };
    }
    case fromAuth.AuthActionTypes.LOGOUT_AUTH_FAIL: {
      return {
        ...state,
        loggingOut: false,
      };
    }
    case fromAuth.AuthActionTypes.LOGOUT_AUTH_SUCCESS: {
      return {
        ...state,
        loggingOut: false,
        loggedIn: false,
        currentUser: null,
      };
    }
  }

  return state;
}

export const getLoggingIn = (state: AuthState) => state.loggingIn;
export const getLoggedIn = (state: AuthState) => state.loggedIn;
export const getLoggingOut = (state: AuthState) => state.loggingOut;
export const getCurrentUser = (state: AuthState) => state.currentUser;
