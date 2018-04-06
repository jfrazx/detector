import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromBelts from '../actions';

import { Belt } from '../../models';

export interface BeltState extends EntityState<Belt> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Belt> = createEntityAdapter<Belt>({
  selectId: belt => belt._id,
});
export const initialState: BeltState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(state = initialState, action: fromBelts.BeltActions) {
  switch (action.type) {
    case fromBelts.BeltActionTypes.LOAD_BELTS:
      return {
        ...state,
        loading: true,
      };

    case fromBelts.BeltActionTypes.LOAD_BELTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromBelts.BeltActionTypes.LOAD_BELTS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };
    default:
      return state;
  }
}

export const getBeltEntities = (state: BeltState) => state.entities;
export const getBeltLoading = (state: BeltState) => state.loading;
export const getBeltLoaded = (state: BeltState) => state.loaded;
