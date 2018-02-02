import * as fromCapabilities from '../actions';
import { Capability } from '../../models';

import { mapToEntities } from '../../../utils';

export interface CapabilityState {
  entities: { [id: string]: Capability };
  loaded: boolean;
  loading: boolean;
  selectedCapabilities: string[];
}

export const initialState: CapabilityState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedCapabilities: [],
};

export function reducer(
  state = initialState,
  action: fromCapabilities.CapabilitiesAction
): CapabilityState {
  switch (action.type) {
    case fromCapabilities.CapabilityActionTypes.LOAD_CAPABILITIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromCapabilities.CapabilityActionTypes.LOAD_CAPABILITIES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
    case fromCapabilities.CapabilityActionTypes.LOAD_CAPABILITIES_SUCCESS: {
      const capabilities = action.payload;
      const entities = mapToEntities(state, capabilities);

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
  }

  return state;
}

export const getCapabilityEntities = (state: CapabilityState) => state.entities;
export const getCapabilitiesLoading = (state: CapabilityState) => state.loading;
export const getCapabilitiesLoaded = (state: CapabilityState) => state.loaded;
