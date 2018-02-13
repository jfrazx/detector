import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromSubmissionFiles from '../actions';

import { SubmissionFile } from '../../models';

export interface SubmissionFileState extends EntityState<SubmissionFile> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<SubmissionFile> = createEntityAdapter<
  SubmissionFile
>({
  selectId: submissionFile => submissionFile._id,
});

export const initialState: SubmissionFileState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(
  state = initialState,
  action: fromSubmissionFiles.SubmissionFileActions
) {
  switch (action.type) {
    case fromSubmissionFiles.SubmissionFileActionTypes.LOAD_SUBMISSION_FILES:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromSubmissionFiles.SubmissionFileActionTypes
      .LOAD_SUBMISSION_FILES_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromSubmissionFiles.SubmissionFileActionTypes
      .LOAD_SUBMISSION_FILES_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromSubmissionFiles.SubmissionFileActionTypes
      .CREATE_SUBMISSION_FILE_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromSubmissionFiles.SubmissionFileActionTypes
      .UPDATE_SUBMISSION_FILE_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromSubmissionFiles.SubmissionFileActionTypes
      .REMOVE_SUBMISSION_FILE_SUCCESS:
      return adapter.removeOne(action.payload._id, state);

    default:
      return state;
  }
}

export const getSubmissionFileEntities = (state: SubmissionFileState) =>
  state.entities;
export const getSubmissionFileLoading = (state: SubmissionFileState) =>
  state.loading;
export const getSubmissionFileLoaded = (state: SubmissionFileState) =>
  state.loaded;
