import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromBelts from './belts.reducer';
import * as fromExams from './exams.reducer';
import * as fromStacks from './stacks.reducer';
import * as fromSubmissions from './submissions.reducer';
import * as fromSubmissionFiles from './submission-files.reducer';

export interface SubmissionState {
  belts: fromBelts.BeltState;
  exams: fromExams.ExamState;
  stacks: fromStacks.StackState;
  submissions: fromSubmissions.SubmissionState;
  submissionFiles: fromSubmissionFiles.SubmissionFileState;
}

export const reducers: ActionReducerMap<SubmissionState> = {
  belts: fromBelts.reducer,
  exams: fromExams.reducer,
  stacks: fromStacks.reducer,
  submissions: fromSubmissions.reducer,
  submissionFiles: fromSubmissionFiles.reducer,
};

export const getSubmissionsState = createFeatureSelector<SubmissionState>(
  'submissions'
);
