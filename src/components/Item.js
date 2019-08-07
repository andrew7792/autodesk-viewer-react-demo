import React from "react";

import "./Item.scss";

function Item(props) {
  const { data } = props;
  return (
    <li className="item" key={data.id}>
      {data.text}
    </li>
  );
}

export default Item;
