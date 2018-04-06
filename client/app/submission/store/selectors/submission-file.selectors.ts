import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromSubmissionFileFiles from '../reducers/submission-files.reducer';

import { SubmissionFile } from '../../models';

export const getSubmissionFileState = createSelector(
  fromFeature.getSubmissionsState,
  (state: fromFeature.SubmissionState) => state.submissionFiles
);

export const getSubmissionFileEntities = createSelector(
  getSubmissionFileState,
  fromSubmissionFileFiles.getSubmissionFileEntities
);

export const getSubmissionFileLoading = createSelector(
  getSubmissionFileState,
  fromSubmissionFileFiles.getSubmissionFileLoading
);

export const getSubmissionFileLoaded = createSelector(
  getSubmissionFileState,
  fromSubmissionFileFiles.getSubmissionFileLoaded
);

export const getSubmissionFiles = createSelector(
  getSubmissionFileEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const getSelectedSubmissionFile = createSelector(
  getSubmissionFileEntities,
  fromRoot.getRouterState,
  (entities, router): SubmissionFile => {
    return router.state && entities[router.state.params.submissionFileId];
  }
);
