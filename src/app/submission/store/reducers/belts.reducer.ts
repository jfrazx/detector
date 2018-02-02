import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromBelts from '../actions';

import { Belt } from '../../models';

export interface BeltState extends EntityState<Belt> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Belt> = createEntityAdapter<Belt>();

export const initialState: BeltState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(state = initialState, action: fromBelts.BeltActions) {
  switch (action.type) {
    case fromBelts.BeltActionTypes.LOAD_BELTS:
      break;

    case fromBelts.BeltActionTypes.LOAD_BELTS_FAIL:
      break;
    case fromBelts.BeltActionTypes.LOAD_BELTS_SUCCESS:
      break;
    default:
      return state;
  }
}
