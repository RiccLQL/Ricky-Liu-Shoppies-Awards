import React from 'react';
import '../styles/Button.css';

const MovieEntry = ({index, data, expand, updateEntry, nominate}) => {

    return (
        <div className="list-container" onMouseOver={() => updateEntry(index)}>
            <div className="list-item">{data.Title} ({data.Year})</div>
            { expand ?
            <div className="list-item-expansion">
                <button className="positive-button nominate-button" onClick={async () => nominate(data)}>Nominate</button>
            </div> : <div></div>
            }
        </div>
    )

}

export default MovieEntry;