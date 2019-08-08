import { handleActions } from "redux-actions";

import actions from "../actions/viewer";

const initialState = {
  isShown: false,
  urn: ""
};

const viewer = handleActions(
  {
    [actions.mountViewer]: (state, action) => ({
      isShown: true,
      urn: action.payload
    }),
    [actions.unmountViewer]: () => initialState
  },
  initialState
);

export default viewer;
