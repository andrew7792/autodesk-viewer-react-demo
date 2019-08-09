import { fromJS } from 'immutable';
import { handleActions, combineActions } from 'redux-actions';

import action from '../actions/getDesignData'

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
        [actions.mountViewer]: (state, action) => ({
            isShown: true,
            urn: action.payload
        }),
        [actions.unmountViewer]: () => initialState
    },
    initialState.get('data'),
);


export default getDesignData