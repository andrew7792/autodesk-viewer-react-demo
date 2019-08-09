import { fromJS } from "immutable";
import { handleActions } from "redux-actions";

import actions from "../actions/getDesignData";

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
  initialState.get("data")
);

export default getDesignData;
