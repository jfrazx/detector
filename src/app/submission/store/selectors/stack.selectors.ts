import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromStacks from '../reducers/stacks.reducer';

import { Stack } from '../../models';

export const getStackState = createSelector(
  fromFeature.getSubmissionsState,
  (state: fromFeature.SubmissionState) => state.stacks
);

export const getStackEntities = createSelector(
  getStackState,
  fromStacks.getStackEntities
);

export const getStackLoading = createSelector(
  getStackState,
  fromStacks.getStackLoading
);

export const getStackLoaded = createSelector(
  getStackState,
  fromStacks.getStackLoaded
);

export const getStacks = createSelector(getStackEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const getSelectedStack = createSelector(
  getStackEntities,
  fromRoot.getRouterState,
  (entities, router): Stack => {
    return router.state && entities[router.state.params.stackId];
  }
);
