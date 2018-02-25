import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export interface AuthorizationState {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AuthorizationState> = {
  auth: fromAuth.reducer,
};

export const getAuthorizationState = createFeatureSelector<AuthorizationState>(
  'authorization'
);
