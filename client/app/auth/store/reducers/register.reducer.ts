import { Action } from '@ngrx/store';

import * as fromRegister from '../actions';

export interface RegisterState {
  registering: boolean;
  registered: boolean;
}

export const initialState: RegisterState = {
  registering: false,
  registered: false,
};

export function reducer(
  state = initialState,
  action: fromRegister.RegisterActions
): RegisterState {
  switch (action.type) {
    case fromRegister.RegisterActionTypes.REGISTER_AUTH: {
      return {
        ...state,
        registering: true,
      };
    }
    case fromRegister.RegisterActionTypes.REGISTER_AUTH_FAIL: {
      return {
        ...state,
        registering: false,
      };
    }
    case fromRegister.RegisterActionTypes.REGISTER_AUTH_SUCCESS: {
      return {
        ...state,
        registered: true,
      };
    }
  }

  return state;
}

export const getRegistered = (state: RegisterState) => state.registered;
export const getRegistering = (state: RegisterState) => state.registering;
