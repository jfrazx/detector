import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromStudents from '../reducers/students.reducer';

import { Student } from '../../models';

export const getStudentState = createSelector(
  fromFeature.getFacilitiesState,
  (state: fromFeature.FacilitiesState) => state.students
);

export const getStudentEntities = createSelector(
  getStudentState,
  fromStudents.getStudentEntities
);

export const getStudentLoading = createSelector(
  getStudentState,
  fromStudents.getStudentLoading
);

export const getStudentLoaded = createSelector(
  getStudentState,
  fromStudents.getStudentLoaded
);

export const getStudents = createSelector(getStudentEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const getSelectedStudent = createSelector(
  getStudentEntities,
  fromRoot.getRouterState,
  (entities, router): Student => {
    return router.state && entities[router.state.params.StudentId];
  }
);
