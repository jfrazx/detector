import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCapability from './capabilities.reducer';
import * as fromRole from './roles.reducer';

export interface AdminState {
  capabilities: fromCapability.CapabilityState;
  roles: fromRole.RoleState;
}

export const reducers: ActionReducerMap<AdminState> = {
  capabilities: fromCapability.reducer,
  roles: fromRole.reducer,
};

export const getAdminState = createFeatureSelector<AdminState>('admin');
