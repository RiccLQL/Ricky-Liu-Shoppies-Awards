import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';
import Nominations from '../components/Nominations';
import Results from '../components/Results';
import '../styles/Home.css';
import '../styles/Text.css';
import '../styles/Button.css'
import axios from 'axios';

const Home = () => {

    const [ searchValue, setSearchValue ] = useState("");
    const [ results, setResults ] = useState("");
    const [ nominations, setNominations ] = useState([]);
    const [ update, setUpdate ] = useState(0);
    /* functions */

    const updateSearchValue = async (query, e) => {
        if (e.key === 'Enter' || !e.key) {
            setResults(await axios.get(`https://www.omdbapi.com/?apikey=206f97ef&s=${query}`));
        }
    }

    const updateValue = async (query) => {
        setSearchValue(query);
    }

    const nominate = async (data) => {
        if ((!nominations.find(nom => nom.Title === data.Title) || !nominations.find(nom => nom.Year === data.Year)) && nominations.length < 5) {
            let noms = nominations;
            noms.push(data);
            await setNominations(noms);
            setUpdate(update ? 0 : 1);
        }
    }

    const removeNominate = async (data) => {
        let noms = nominations;
        let index = noms.indexOf(data);
        noms.splice(index, 1);
        setNominations(noms);
        setUpdate(update ? 0 : 1);
    }

    /* Render */
    return (
        <div className="home">
            <h1>The Shoppies</h1>
            <SearchBar input={searchValue} updateSearchValue={updateSearchValue} updateValue={updateValue} />
            <div className="split-container" >
                <div style={{ width: '59%', float: 'left' }}><Results results={results.data ? results.data.Search ? results.data.Search : 0 : 0} nominate={nominate} nominations={nominations}/></div>
                <div style={{ width: '39%', float: 'right' }}><Nominations nominations={nominations} removeNominate={removeNominate}/>{nominations.length === 5 ? <button className="positive-button" onClick={() => {}}>Submit Nominations</button> : <button className="gray-button" style={{ cursor: 'unset' }}>Submit Nominations</button> }</div>
                
            </div>
        </div>
    );
}

export default Home;