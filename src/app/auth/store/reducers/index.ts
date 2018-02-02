import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromRoles from './roles.reducer';
import * as fromCapabilities from './capabilities.reducer';

export interface AuthorizationState {
  auth: fromAuth.AuthState;
  roles: fromRoles.RoleState;
  capabilities: fromCapabilities.CapabilityState;
}

export const reducers: ActionReducerMap<AuthorizationState> = {
  auth: fromAuth.reducer,
  roles: fromRoles.reducer,
  capabilities: fromCapabilities.reducer,
};

export const getAuthorizationState = createFeatureSelector<AuthorizationState>(
  'authorization'
);
