import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromLocations from './locations.reducer';
import * as fromStudents from './students.reducer';

export interface FacilitiesState {
  locations: fromLocations.LocationState;
  students: fromStudents.StudentState;
}

export const reducers: ActionReducerMap<FacilitiesState> = {
  locations: fromLocations.reducer,
  students: fromStudents.reducer,
};

export const getFacilitiesState = createFeatureSelector<FacilitiesState>(
  'facilities'
);
