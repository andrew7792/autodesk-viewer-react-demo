import { createAction } from "redux-actions";

import { MOUNT_VIEWER, UNMOUNT_VIEWER } from "./constants/viewer";

const actions = {
  mountViewer: createAction(MOUNT_VIEWER),
  unmountViewer: createAction(UNMOUNT_VIEWER)
};

export default actions;
