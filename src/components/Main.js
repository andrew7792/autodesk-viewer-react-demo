import React from "react";

import BucketList from "./BucketList";
import Viewer from "./Viewer";

import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <BucketList />
      <Viewer />
    </div>
  );
}

export default Main;
