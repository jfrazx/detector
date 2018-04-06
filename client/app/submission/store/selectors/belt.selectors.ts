import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromBelts from '../reducers/belts.reducer';

import { Belt } from '../../models';

export const getBeltState = createSelector(
  fromFeature.getSubmissionsState,
  (state: fromFeature.SubmissionState) => state.belts
);

export const getBeltEntities = createSelector(
  getBeltState,
  fromBelts.getBeltEntities
);

export const getBeltLoading = createSelector(
  getBeltState,
  fromBelts.getBeltLoading
);

export const getBeltLoaded = createSelector(
  getBeltState,
  fromBelts.getBeltLoaded
);
