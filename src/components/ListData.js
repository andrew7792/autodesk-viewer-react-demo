import React from "react";

// eslint-disable-next-line
import Bucket from "./Bucket";
import Item from "./Item";
import loading from "../img/loading.svg";

import "./ListData.scss";

function ListData(props) {
  const { data, child } = props;

  if (!data)
    return (
      <div className="loading">
        <img src={loading} height="40px" width="40px" alt="Loading..." />
      </div>
    );

  return (
    <div className="list-data">
      <ul>
        {child === "buckets"
          ? data.map(value => <Bucket key={value.id} data={value} />)
          : data.map(value => <Item key={value.id} data={value} />)}
      </ul>
    </div>
  );
}

export default ListData;
