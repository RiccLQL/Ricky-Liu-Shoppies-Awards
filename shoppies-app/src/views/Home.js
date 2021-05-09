import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';
import Nominations from '../components/Nominations';
import Results from '../components/Results';
import '../styles/Home.css';
import '../styles/Text.css';
import axios from 'axios';

const Home = () => {

    const [ searchValue, setSearchValue ] = useState("");
    const [ results, setResults ] = useState("");
    /* functions */

    const updateSearchValue = async (query, e) => {
        if (e.key === 'Enter' || !e.key) {
            setResults(await axios.get(`http://www.omdbapi.com/?apikey=206f97ef&s=${query}`));
        }
    }

    const updateValue = async (query) => {
        setSearchValue(query);
    }

    /* Render */
    return (
        <div className="home">
            <h1>The Shoppies</h1>
            <SearchBar input={searchValue} updateSearchValue={updateSearchValue} updateValue={updateValue} />
            <div>
                <Results results={results.data ? results.data.Search ? results.data.Search : 0 : 0}/>
                <Nominations/>
            </div>
        </div>
    );
}

export default Home;