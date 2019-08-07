import React, { useEffect, useState, Fragment } from "react";

import ListData from "./ListData";
import Item from "./Item";
import { getItems } from "../libs/ossQueries";

import "./Bucket.scss";

function Bucket(props) {
  const [items, setItems] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getItems(props.data.id).then(data => {
      setItems(data);
    });
  }, []);

  const { data } = props;
  return (
    <Fragment key={data.id}>
      <li className="bucket" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "down" : "right"} />
        {data.text}
      </li>
      {isOpen && <ListData data={items} child={Item} />}
    </Fragment>
  );
}

export default Bucket;
