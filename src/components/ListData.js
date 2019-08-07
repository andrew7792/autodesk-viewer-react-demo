import React from "react";

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
      <ul>{data.map(value => child({ data: value }))}</ul>
    </div>
  );
}

export default ListData;
