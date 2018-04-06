import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromRegister from './register.reducer';

export interface AuthorizationState {
  auth: fromAuth.AuthState;
  register: fromRegister.RegisterState;
}

export const reducers: ActionReducerMap<AuthorizationState> = {
  auth: fromAuth.reducer,
  register: fromRegister.reducer,
};

export const getAuthorizationState = createFeatureSelector<AuthorizationState>(
  'authorization'
);
