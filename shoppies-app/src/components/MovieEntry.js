import React from 'react';

const MovieEntry = ({key, data}) => {

    /* functions */

    const expand = () => {

    }

    /* render */

    return (
        <div className="list-item" onClick={expand()}>{data.Title} ({data.Year})</div>
    )

}

export default MovieEntry;