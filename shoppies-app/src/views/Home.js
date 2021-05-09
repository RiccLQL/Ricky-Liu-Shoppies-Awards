import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';
import Nominations from '../components/Nominations';
import Results from '../components/Results';
import '../styles/Home.css';
import '../styles/Text.css';
import '../styles/Button.css'
import axios from 'axios';
import fileDownload from 'js-file-download';

const Home = ({goToSubmitted}) => {

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

    const fileUpload = async (e) => {
        if (e.target.files[0]) {
            let reader = new FileReader();
            const file = e.target.files[0]
            reader.readAsText(file);
            reader.onload = () => {
                if (reader.result) {
                    const uploadedString = reader.result;
                    setNominations(JSON.parse(uploadedString));
                }
            }
        }
    }

    /* Render */
    return (
        <div className="home">
            <h1>The Shoppies</h1>
            <SearchBar input={searchValue} updateSearchValue={updateSearchValue} updateValue={updateValue} />
            <div className="split-container" >
                <div style={{ width: '59%', float: 'left' }}><Results results={results.data ? results.data.Search ? results.data.Search : 0 : 0} nominate={nominate} nominations={nominations}/></div>
                <div style={{ width: '39%', float: 'right' }}>
                    <Nominations nominations={nominations} removeNominate={removeNominate}/>
                    {nominations.length === 5 ? 
                    <div>
                        <button className="positive-button break" onClick={() => {goToSubmitted()}}>Submit Nominations</button>
                        <button className="neutral-button break" onClick={() => {if (nominations.length !== 0) fileDownload(JSON.stringify(nominations), `nominations-${nominations[0].Title}${nominations.length === 1 ? '' : 'and more'}.txt`)}}>Download List</button>
                        <button className="neutral-button break" onClick={() => {document.getElementById("upload-list").click()}}>Upload List</button>
                        <input type="file" id="upload-list" className="neutral-button break" placeholder="Upload List" style={{ display: 'none' }} onChange={fileUpload}/>
                    </div> : 
                    <div>
                        <button className="gray-button break" style={{ cursor: 'unset' }}>Submit Nominations</button>
                        <button className="neutral-button break" onClick={() => {if (nominations.length !== 0) fileDownload(JSON.stringify(nominations), `nominations-${nominations[0].Title}${nominations.length === 1 ? '' : ' and more'}.txt`)}}>Download List</button>
                        <button className="neutral-button break" onClick={() => {document.getElementById("upload-list").click()}}>Upload List</button>
                        <input type="file" id="upload-list" className="neutral-button break" placeholder="Upload List" style={{ display: 'none' }} onChange={fileUpload}/>
                    </div> }
                </div>
            </div>
        </div>
    );
}

export default Home;