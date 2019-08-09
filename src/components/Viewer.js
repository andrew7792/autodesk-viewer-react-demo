import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Helpers from "../helpers/viewer";

import "./Viewer.scss";

function Viewer(props) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(false);
    console.log("changed");
  }, [props.viewer.urn]);

  useEffect(() => {
    setIsShown(true);
  }, [isShown]);

  useEffect(() => {
    if (isShown) {
      Helpers.launchViewer(props.viewer.urn);
    }
  }, [isShown]);

  if (!isShown) return null;

  return (
    <div className="container">
      <div id="forgeViewer" className="forgeViewer" />
    </div>
  );
}

const mapStateToProps = store => {
  return {
    viewer: store.get("viewer")
  };
};

export default connect(mapStateToProps)(Viewer);
