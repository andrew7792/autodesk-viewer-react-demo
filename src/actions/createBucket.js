import { createAction } from 'redux-actions';

import {
    OPEN_MODAL_BUCKET,
    CLOSE_MODAL_BUCKET,
    SET_CREATE_DATA_BUCKET
} from './constants/createBucket';

const actions = {
        openModalBucket: createAction(OPEN_MODAL_BUCKET),
        closeModalBucket: createAction(CLOSE_MODAL_BUCKET),
        setCreateDataBucket: createAction(SET_CREATE_DATA_BUCKET),
};

export default actions
