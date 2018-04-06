import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromStudents from '../actions';

import { Student } from '../../models';

export interface StudentState extends EntityState<Student> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Student> = createEntityAdapter<Student>({
  selectId: student => student._id,
});

export const initialState: StudentState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(
  state = initialState,
  action: fromStudents.StudentActions
) {
  switch (action.type) {
    case fromStudents.StudentActionTypes.LOAD_STUDENTS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case fromStudents.StudentActionTypes.LOAD_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case fromStudents.StudentActionTypes.LOAD_STUDENTS_SUCCESS:
      return {
        ...adapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case fromStudents.StudentActionTypes.CREATE_STUDENT_SUCCESS:
      return adapter.addOne(action.payload, state);

    case fromStudents.StudentActionTypes.UPDATE_STUDENT_SUCCESS:
      return adapter.updateOne(action.payload, state);

    case fromStudents.StudentActionTypes.REMOVE_STUDENT_SUCCESS:
      return adapter.removeOne(action.payload._id, state);

    default:
      return state;
  }
}

export const getStudentEntities = (state: StudentState) => state.entities;
export const getStudentLoading = (state: StudentState) => state.loading;
export const getStudentLoaded = (state: StudentState) => state.loaded;
