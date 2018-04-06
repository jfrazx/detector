import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromLocations from '../actions';

import { Location } from '../../models';

export interface LocationState extends EntityState<Location> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Location> = createEntityAdapter<Location>({
  selectId: location => location._id,
});

export const initialState: LocationState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(
  state = initialState,
  action: fromLocations.LocationActions
) {
  switch (action.type) {
    case fromLocations.LocationActionTypes.LOAD_LOCATIONS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromLocations.LocationActionTypes.LOAD_LOCATIONS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromLocations.LocationActionTypes.LOAD_LOCATIONS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromLocations.LocationActionTypes.CREATE_LOCATION_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromLocations.LocationActionTypes.UPDATE_LOCATION_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromLocations.LocationActionTypes.REMOVE_LOCATION_SUCCESS:
      return adapter.removeOne(action.payload._id, state);

    default:
      return state;
  }
}

export const getLocationEntities = (state: LocationState) => state.entities;
export const getLocationLoading = (state: LocationState) => state.loading;
export const getLocationLoaded = (state: LocationState) => state.loaded;
