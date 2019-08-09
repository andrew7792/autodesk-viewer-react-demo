import React, { useState, Fragment } from "react";
import { connect } from 'react-redux';

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
    if (!isReady) {
      getForgeToken(accessToken => {
        getStatus(props.data.id, accessToken).then(data => {
          if (data.status === "success" && data.progress === "complete") {
            setIsReady(true);
            console.log("Ready!");
          }
        });
      });
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
