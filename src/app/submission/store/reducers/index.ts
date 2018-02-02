import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SubmissionState {}

export const reducers: ActionReducerMap<SubmissionState> = {};

export const getBeltState = createFeatureSelector<SubmissionState>(
  'submissions'
);
