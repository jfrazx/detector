import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromSubmissions from '../reducers/submissions.reducer';

import { Submission } from '../../models';

export const getSubmissionState = createSelector(
  fromFeature.getSubmissionsState,
  (state: fromFeature.SubmissionState) => state.submissions
);

export const getSubmissionEntities = createSelector(
  getSubmissionState,
  fromSubmissions.getSubmissionEntities
);

export const getSubmissionLoading = createSelector(
  getSubmissionState,
  fromSubmissions.getSubmissionLoading
);

export const getSubmissionLoaded = createSelector(
  getSubmissionState,
  fromSubmissions.getSubmissionLoaded
);

export const getSubmissions = createSelector(getSubmissionEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const getSelectedSubmission = createSelector(
  getSubmissionEntities,
  fromRoot.getRouterState,
  (entities, router): Submission => {
    return router.state && entities[router.state.params.submissionId];
  }
);
