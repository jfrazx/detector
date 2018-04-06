import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromSubmissions from '../actions';

import { Submission } from '../../models';

export interface SubmissionState extends EntityState<Submission> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Submission> = createEntityAdapter<
  Submission
>({
  selectId: submission => submission._id,
});

export const initialState: SubmissionState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(
  state = initialState,
  action: fromSubmissions.SubmissionActions
) {
  switch (action.type) {
    case fromSubmissions.SubmissionActionTypes.LOAD_SUBMISSIONS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromSubmissions.SubmissionActionTypes.LOAD_SUBMISSIONS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromSubmissions.SubmissionActionTypes.LOAD_SUBMISSIONS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromSubmissions.SubmissionActionTypes.CREATE_SUBMISSION_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromSubmissions.SubmissionActionTypes.UPDATE_SUBMISSION_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromSubmissions.SubmissionActionTypes.REMOVE_SUBMISSION_SUCCESS:
      return adapter.removeOne(action.payload._id, state);

    default:
      return state;
  }
}

export const getSubmissionEntities = (state: SubmissionState) => state.entities;
export const getSubmissionLoading = (state: SubmissionState) => state.loading;
export const getSubmissionLoaded = (state: SubmissionState) => state.loaded;
