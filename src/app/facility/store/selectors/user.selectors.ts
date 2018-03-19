import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/users.reducer';

import { User } from '../../models';

export const getUserState = createSelector(
  fromFeature.getFacilitiesState,
  (state: fromFeature.FacilitiesState) => state.users
);

export const getUserEntities = createSelector(
  getUserState,
  fromUsers.getUserEntities
);

export const getUserLoading = createSelector(
  getUserState,
  fromUsers.getUserLoading
);

export const getUserLoaded = createSelector(
  getUserState,
  fromUsers.getUserLoaded
);

export const getUsers = createSelector(getUserEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const getSelectedUser = createSelector(
  getUserEntities,
  fromRoot.getRouterState,
  (entities, router): User => {
    return router.state && entities[router.state.params.userId];
  }
);
