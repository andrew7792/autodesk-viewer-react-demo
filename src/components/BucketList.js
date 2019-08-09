import React, { useEffect, useState } from "react";
import ListData from "./ListData";
import { getBuckets } from "../libs/ossQueries";

import "./BucketList.scss";

function BucketList() {
  const [buckets, setBuckets] = useState(null);

  useEffect(() => {
    getBuckets().then(data => {
      setBuckets(data);
    });
  }, []);

  return (
    <div className="list">
      <div className="toolbar"> Toolbar</div>
      <ListData data={buckets} child="buckets" />
    </div>
  );
}

export default BucketList;
