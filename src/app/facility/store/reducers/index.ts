import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromLocations from './locations.reducer';
import * as fromStudents from './students.reducer';
import * as fromUsers from './users.reducer';

export interface FacilitiesState {
  locations: fromLocations.LocationState;
  students: fromStudents.StudentState;
  users: fromUsers.UserState;
}

export const reducers: ActionReducerMap<FacilitiesState> = {
  locations: fromLocations.reducer,
  students: fromStudents.reducer,
  users: fromUsers.reducer,
};

export const getFacilitiesState = createFeatureSelector<FacilitiesState>(
  'facilities'
);
