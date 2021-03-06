import React, { useState } from 'react';
import '../styles/Results.css';
import MovieEntry from './MovieEntry';

const Results = ({results, nominate, nominations}) => {

    let expandArray = new Array(results.length);

    const [expand, setExpand] = useState(expandArray);

    const updateEntry = (index, data) => {
        let items = expand;
        items = new Array(results.length);
        
        if (nominations.find(noms => noms.Title === data.Title) && nominations.find(noms => noms.Year === data.Year)) {
            items[index] = -1;
        } else {
            items[index] = 1;
        }
        setExpand(items);
    }

    const leaveEntry = () => {
        setExpand(new Array(results.length));
    }

    /* Render */
    if (results !== 0) {
        return (
            <div className="container">
                <h4>Results</h4>
                <div className="column-container left-align">
                    <div className="list">
                        {results.map((item, index) => {
                            return <MovieEntry id={'movie-entry-' + index} className="list-item" key={index} index={index} data={item} expand={expand[index]} updateEntry={updateEntry} nominate={nominate} leaveEntry={leaveEntry}/>
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