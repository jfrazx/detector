import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromCapabilities from '../reducers/capabilities.reducer';

export const getCapabilityState = createSelector(
  fromFeature.getAuthorizationState,
  (state: fromFeature.AuthorizationState) => state.capabilities
);

export const getCapabilityEntities = createSelector(
  getCapabilityState,
  fromCapabilities.getCapabilityEntities
);

export const getAllCapabilities = createSelector(
  getCapabilityEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const getCapabilitiesLoaded = createSelector(
  getCapabilityState,
  fromCapabilities.getCapabilitiesLoaded
);

export const getCapabilitiesLoading = createSelector(
  getCapabilityState,
  fromCapabilities.getCapabilitiesLoading
);
