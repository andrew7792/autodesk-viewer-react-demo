import React, { useState } from "react";

function Viewer(props) {
  const [isShown, setIsShown] = useState(false);

  if (!isShown) return null;

  return (
    <div id="forgeViewer" className="viewer">
      Viewer
    </div>
  );
}

export default Viewer;
