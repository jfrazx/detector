import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromRegister from '../reducers/register.reducer';

export const getRegisterState = createSelector(
  fromFeature.getAuthorizationState,
  (state: fromFeature.AuthorizationState) => state.register
);

export const getRegistering = createSelector(
  getRegisterState,
  fromRegister.getRegistering
);
export const getRegistered = createSelector(
  getRegisterState,
  fromRegister.getRegistered
);
