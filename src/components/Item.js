import React, { useState, Fragment } from "react";
import {} from "immutable";
import { connect } from "react-redux";

import actions from "../actions/viewer";
// eslint-disable-next-line
import ContextMenu from "./ContextMenu";
import { getForgeToken } from "../libs/tokenQueries";
import { getStatus } from "../libs/forgeQueries";
import { translate } from "../libs/modelderivativeQueries";

import "./Item.scss";

function Item(props) {
  const [isReady, setIsReady] = useState(false);

  const buttons = [
    { text: "Translate", action: () => translate(props.data.id) }
  ];

  const handleClick = () => {
    const { mountViewer, data } = props;

    if (!isReady) {
      getForgeToken(accessToken => {
        getStatus(data.id, accessToken).then(res => {
          if (res.status === "success" && res.progress === "complete") {
            setIsReady(true);
            mountViewer(data.id);
            console.log("Ready!");
          }
        });
      });
    } else {
      mountViewer(data.id);
    }
  };

  const { data } = props;
  return (
    <Fragment key={data.id}>
      <li className="item" id={data.id} onClick={handleClick}>
        {data.text}
      </li>
      <ContextMenu id={data.id} buttons={buttons} />
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  mountViewer: event => dispatch(actions.mountViewer(event)),
  unmountViewer: event => dispatch(actions.unmountViewer(event))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
