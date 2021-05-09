import React from 'react';
import '../styles/Button.css';

const MovieEntry = ({index, data, expand, updateEntry, leaveEntry, nominate}) => {

    return (
        <div className="list-container" onMouseOver={() => updateEntry(index, data)} onMouseLeave={() => leaveEntry()}>
            <div className="list-item">{data.Title} ({data.Year})</div>
            { expand === 1 ?
            <div className="list-item-expansion">
                <button className="positive-button nominate-button" onClick={async () => nominate(data)}>Nominate</button>
            </div> : expand === -1 ? 
            <div className="list-item-expansion">
                <button className="neutral-button nominate-button" style={{ cursor: 'unset' }}>Already nominated</button>
            </div> : <div></div>
            }
        </div>
    )

}

export default MovieEntry;