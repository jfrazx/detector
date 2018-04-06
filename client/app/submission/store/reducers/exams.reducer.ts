import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromExams from '../actions';

import { Exam } from '../../models';

export interface ExamState extends EntityState<Exam> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Exam> = createEntityAdapter<Exam>({
  selectId: exam => exam._id,
});

export const initialState: ExamState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(state = initialState, action: fromExams.ExamActions) {
  switch (action.type) {
    case fromExams.ExamActionTypes.LOAD_EXAMS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromExams.ExamActionTypes.LOAD_EXAMS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromExams.ExamActionTypes.LOAD_EXAMS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromExams.ExamActionTypes.CREATE_EXAM_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromExams.ExamActionTypes.UPDATE_EXAM_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromExams.ExamActionTypes.REMOVE_EXAM_SUCCESS:
      return adapter.removeOne(action.payload._id, state);

    default:
      return state;
  }
}

export const getExamEntities = (state: ExamState) => state.entities;
export const getExamLoading = (state: ExamState) => state.loading;
export const getExamLoaded = (state: ExamState) => state.loaded;
