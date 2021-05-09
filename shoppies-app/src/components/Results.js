import React from 'react';
import '../styles/Results.css';
import MovieEntry from './MovieEntry';

const Results = ({results}) => {

    /* functions */

    /* Render */
    if (results !== 0) {
        return (
            <div className="container">
                <h4>Results</h4>
                <div className="column-container left-align">
                    <div className="list">
                        {results.map((item, index) => {
                            return <MovieEntry className="list-item" key={index} data={item}></MovieEntry>
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <h4>No results found...</h4>
            </div>
        )
    }
}

export default Results;