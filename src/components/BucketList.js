import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Refresh from "./Refresh";
import AddBucket from "./AddBucket";
import ListData from "./ListData";
import { getBuckets } from "../libs/ossQueries";
import { getDesignDataAction } from "../actions/getDesignData";
import "./BucketList.scss";

function BucketList() {
  const [buckets, setBuckets] = useState(null);
  const [propA, setPropA] = useState(0);

  useEffect(() => {
    console.log('update')
    getDesignDataAction();
    getBuckets().then(data => {
      setBuckets(data);
    });
  }, [propA]);

  return (
    <div className="bucket-list">
      <div className="toolbar">
        <AddBucket />
        <Refresh refresh={setPropA} />
      </div>
      <div className="list">
        {
          <ListData data={buckets} child="buckets" />
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ getDesignData: state.getDesignData });

const mapDispatchToProps = dispatch => ({
  getDesignDataAction: dispatch(getDesignDataAction)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BucketList);
