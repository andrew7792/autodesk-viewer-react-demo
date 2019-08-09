import { createAction } from 'redux-actions';

export const createFetchAction = action => ({
    fetching: createAction(action.FETCHING),
    action: createAction(action.ACTION),
    success: createAction(action.SUCCESS),
    error: createAction(action.ERROR),
    failure: createAction(action.FAILURE),
    done: createAction(action.DONE),
    progress: createAction(action.PROGRESS),
});
