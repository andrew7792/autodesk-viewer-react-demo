import { fromJS } from 'immutable';
import { handleActions, combineActions } from 'redux-actions';

import actions from '../actions/getDesignData'

const initialState = fromJS({
    data: [
        {
            children: false,
            id: "",
            text: "",
            type: ""
        }
    ]
});

const getDesignData = handleActions(
    {
        [actions.getDesignData.fetching]: state =>
            state.set('fetching', true),
        [combineActions(
            actions.getDesignData.success,
            actions.getDesignData.error,
            actions.getDesignData.failure,
        )]: state => state.set('fetching', false),
        [actions.getDesignData.success]: (state, { payload }) =>
            state.set('data', fromJS(payload)),
        },
    initialState,
);


export default getDesignData
