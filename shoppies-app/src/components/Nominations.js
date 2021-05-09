import React from 'react';
import '../styles/Results.css';

const Nominations = ({nominations, removeNominate}) => {


    /* Render */
    return (
        <div className="container">
            <h4>Nominations list ({nominations.length}/5)</h4>
            <div className="column-container left-align">
                <div className="list">
                    {nominations.map((item, index) => {
                        return <div className="list-container" key={index}><div className="list-item">{item.Title} ({item.Year})</div><button className="negative-button nominate-button" onClick={async () => removeNominate(item)}>Remove</button></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Nominations;