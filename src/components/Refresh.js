import React, {useState} from 'react'

import {createBucket} from '../libs/ossQueries'

const Refresh = props => {
    return(
        <div>
            <button onClick={props.refresh}>Refresh</button>
        </div>

    )
}

export default Refresh
