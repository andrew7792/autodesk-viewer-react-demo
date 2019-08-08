import React, { useState } from "react";
import { connect } from "react-redux";

import { getForgeToken } from "../libs/tokenQueries";
import { getStatus } from "../libs/forgeQueries";
import actions from "../actions/viewer";

import "./Item.scss";

function Item(props) {
  const [isReady, setIsReady] = useState(false);

  const handleClick = () => {
    const { mountViewer } = props;

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
    mountViewer({
      urn: "urn123"
    });
  };

  const { data } = props;
  return (
    <li className="item" key={data.id} onClick={handleClick}>
      {data.text}
    </li>
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
