import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromExams from '../reducers/exams.reducer';

import { Exam } from '../../models';

export const getExamState = createSelector(
  fromFeature.getSubmissionsState,
  (state: fromFeature.SubmissionState) => state.exams
);

export const getExamEntities = createSelector(
  getExamState,
  fromExams.getExamEntities
);

export const getExamLoading = createSelector(
  getExamState,
  fromExams.getExamLoading
);

export const getExamLoaded = createSelector(
  getExamState,
  fromExams.getExamLoaded
);

export const getExams = createSelector(getExamEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const getSelectedExam = createSelector(
  getExamEntities,
  fromRoot.getRouterState,
  (entities, router): Exam => {
    return router.state && entities[router.state.params.examId];
  }
);
