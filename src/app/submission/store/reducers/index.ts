import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromBelts from './belts.reducer';
import * as fromStacks from './stacks.reducer';

export interface SubmissionState {
  belts: fromBelts.BeltState;
  stacks: fromStacks.StackState;
}

export const reducers: ActionReducerMap<SubmissionState> = {
  belts: fromBelts.reducer,
  stacks: fromStacks.reducer,
};

export const getSubmissionsState = createFeatureSelector<SubmissionState>(
  'submissions'
);
