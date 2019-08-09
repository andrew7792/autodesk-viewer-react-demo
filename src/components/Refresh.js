import React, {useState, useEffect} from 'react'

import {createBucket, getBuckets} from '../libs/ossQueries'
import {getDesignDataAction} from "../actions/getDesignData";

const Refresh = props => {
    const [refresh, setRefresh] = useState(0);
    const update = () => setRefresh(refresh => refresh + 1)

    useEffect(() => {
         return props.refresh(refresh => refresh + 1)
    }, [refresh]);
    return <button onClick={update}>Refresh</button>
}

export default Refresh
