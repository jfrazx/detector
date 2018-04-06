export * from './actions';
export * from './effects';
export * from './reducers';
export * from './selectors';

import * as submissionStore from '../../submission/store';

export const fromSubmission = submissionStore;
