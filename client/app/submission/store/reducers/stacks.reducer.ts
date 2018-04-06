import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromStacks from '../actions';

import { Stack } from '../../models';

export interface StackState extends EntityState<Stack> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Stack> = createEntityAdapter<Stack>({
  selectId: stack => stack._id,
});

export const initialState: StackState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(state = initialState, action: fromStacks.StackActions) {
  switch (action.type) {
    case fromStacks.StackActionTypes.LOAD_STACKS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromStacks.StackActionTypes.LOAD_STACKS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromStacks.StackActionTypes.LOAD_STACKS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromStacks.StackActionTypes.CREATE_STACK_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromStacks.StackActionTypes.UPDATE_STACK_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromStacks.StackActionTypes.REMOVE_STACK_SUCCESS:
      return adapter.removeOne(action.payload._id, state);

    default:
      return state;
  }
}

export const getStackEntities = (state: StackState) => state.entities;
export const getStackLoading = (state: StackState) => state.loading;
export const getStackLoaded = (state: StackState) => state.loaded;
