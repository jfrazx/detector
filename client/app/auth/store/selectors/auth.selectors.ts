import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(
  fromFeature.getAuthorizationState,
  (state: fromFeature.AuthorizationState) => state.auth
);

export const getLoggingIn = createSelector(getAuthState, fromAuth.getLoggingIn);
export const getLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);
export const getLoggingOut = createSelector(
  getAuthState,
  fromAuth.getLoggingOut
);
export const getCurrentUser = createSelector(
  getAuthState,
  fromAuth.getCurrentUser
);
