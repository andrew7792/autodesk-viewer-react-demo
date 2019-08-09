import { createAction } from "redux-actions";

import { GET_DESIGN_DATA } from "./constants/getDesignData";

const actions = {
    getDesignData: createAction(GET_DESIGN_DATA),
};

export default actions;