import { combineReducers } from 'redux-immutable';
import createBucket from './createBucket';

const appReducer = combineReducers({
    createBucket
});


const rootReducer = (state, action) => {
    /**When will be authorization*/
    // const { login } = userActions;
    //
    // if (action.type === login.action().type) {
    //     state = undefined;
    // }

    return appReducer(state, action);
};

export default rootReducer;
