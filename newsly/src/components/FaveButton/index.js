import React, { useState } from 'react';


export const FaveButton = () => {
    const [ faved, setFaved ] = useState(false);

    const handleFave = e => {
        e.stopPropagation()
        setFaved(prev => !prev)
    }

    return (
        <span role="switch" onClick={handleFave} style={{ color: faved ? 'blue' : 'grey', cursor: 'pointer' }}>★</span>
    );
}
