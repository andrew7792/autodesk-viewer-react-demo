import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

// eslint-disable-next-line
import ContextMenu from "./ContextMenu";
// eslint-disable-next-line
import ListData from "./ListData";
import { getItems, uploadFile } from "../libs/ossQueries";

import "./Bucket.scss";

function Bucket(props) {
  const [items, setItems] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    {
      text: "Upload",
      action: () => document.getElementById(`${props.data.id}-file`).click()
    }
  ];

  useEffect(() => {
    getItems(props.data.id).then(data => {
      setItems(data);
    });
  }, []);

  const handleChange = e => {
    const data = new FormData();
    data.append("fileToUpload", e.target.files[0]);
    data.append("bucketKey", props.data.id);
    uploadFile(data);
  };

  const { data } = props;
  return (
    <Fragment key={data.id}>
      <li className="bucket" id={data.id} onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "down" : "right"} />
        {data.text}
      </li>
      <input
        type="file"
        id={`${data.id}-file`}
        hidden
        onChange={handleChange}
        formEncType="multipart/form-data"
      />
      <ContextMenu id={data.id} buttons={buttons} />
      {isOpen && <ListData data={items} child="item" />}
    </Fragment>
  );
}
export default connect()(Bucket);
