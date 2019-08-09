import React, {useState} from 'react'

import {createBucket} from '../libs/ossQueries'

const AddBucket = () => {
    const handleSubmit = event => {
        event.preventDefault();
        createBucket(value)
        setValue('')
        alert('Create bucket: ' + value);
    }

    const updateField = e => {
        setValue(e.target.value)
    }

    const [value, setValue] = useState('')
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Create bucket:
                <input type="text" value={value} onChange={updateField} />
            </label>
            <input type="submit" value="Send" />
        </form>
    )
}

export default AddBucket
