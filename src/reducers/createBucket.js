import { fromJS } from 'immutable';
import { handleActions, combineActions } from 'redux-actions';

import action from '../actions/createBucket'

const initialState = fromJS({
    createBucket:{
        name: 'input your bucket name',
    }
});

const createBucket = handleActions(
    {
        [combineActions(
            action.openModalBucket,
            action.closeModalBucket
        )]: state => {
            if (state) {
                console.log(state)
                return state;
            }
            return state;
        },
    },
    initialState.get('createBucket'),
);


export default createBucket
