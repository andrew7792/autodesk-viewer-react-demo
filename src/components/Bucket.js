import React, { useEffect, useState, Fragment } from "react";
import {connect} from 'react-redux';
// eslint-disable-next-line
import ContextMenu from "./ContextMenu";
import ListData from "./ListData";
import Item from "./Item";
import { getItems } from "../libs/ossQueries";

import "./Bucket.scss";

const buttons = [{ text: "Upload", action: () => console.log("Upload") }];

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
      <li className="bucket" id={data.id} onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "down" : "right"} />
        {data.text}
      </li>
      <ContextMenu id={data.id} buttons={buttons} />
      {isOpen && <ListData data={items} child='item' />}
    </Fragment>
  );
}
export default connect()(Bucket)
