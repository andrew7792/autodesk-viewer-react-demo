import { combineReducers } from "redux-immutable";
import createBucket from "./createBucket";
import viewer from "./viewer";

const appReducer = combineReducers({
  createBucket,
  viewer
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
