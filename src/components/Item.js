import React, { useState } from "react";

import { getForgeToken } from "../libs/tokenQueries";
import { getStatus } from "../libs/forgeQueries";

import "./Item.scss";

function Item(props) {
  const [isReady, setIsReady] = useState(false);

  const handleClick = () => {
    if (!isReady) {
      getForgeToken(accessToken => {
        getStatus(props.data.id, accessToken).then(data => {
          if (data.status === "success" && data.progress === "complete") {
            setIsReady(true);
          }
        });
      });
    }
  };

  const { data } = props;
  return (
    <li className="item" key={data.id} onClick={handleClick}>
      {data.text}
    </li>
  );
}

export default Item;
