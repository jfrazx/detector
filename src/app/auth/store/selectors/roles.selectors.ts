import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromRoles from '../reducers/roles.reducer';

import { Role } from '../../models';

export const getRoleState = createSelector(
  fromFeature.getAuthorizationState,
  (state: fromFeature.AuthorizationState) => state.roles
);

export const getRoleEntities = createSelector(
  getRoleState,
  fromRoles.getRoleEntities
);

export const getAllRoles = createSelector(getRoleEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getSelectedRole = createSelector(
  getRoleEntities,
  fromRoot.getRouterState,
  (entities, router): Role =>
    router.state && entities[router.state.params.role_id]
);

export const getAllLoaded = createSelector(
  getRoleState,
  fromRoles.getRolesLoaded
);

export const getAllLoading = createSelector(
  getRoleState,
  fromRoles.getRolesLoading
);
