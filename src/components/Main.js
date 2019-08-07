import React from "react";

import BucketList from "./BucketList";

import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <BucketList />
      <div className="viewer">Viewer</div>
    </div>
  );
}

export default Main;
