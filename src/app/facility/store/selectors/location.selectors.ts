import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromLocations from '../reducers/locations.reducer';

import { Location } from '../../models';

export const getLocationState = createSelector(
  fromFeature.getFacilitiesState,
  (state: fromFeature.FacilitiesState) => state.locations
);

export const getLocationEntities = createSelector(
  getLocationState,
  fromLocations.getLocationEntities
);

export const getLocationLoading = createSelector(
  getLocationState,
  fromLocations.getLocationLoading
);

export const getLocationLoaded = createSelector(
  getLocationState,
  fromLocations.getLocationLoaded
);

export const getLocations = createSelector(getLocationEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const getSelectedLocation = createSelector(
  getLocationEntities,
  fromRoot.getRouterState,
  (entities, router): Location => {
    return router.state && entities[router.state.params.locationId];
  }
);
