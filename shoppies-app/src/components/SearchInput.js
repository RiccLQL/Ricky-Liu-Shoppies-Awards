import React from 'react';
import '../styles/Search.css'

const SearchInput = ({input, updateSearchValue}) => {

    return (
            <input className="search-element" type="text" value={input} onChange={(e) => updateSearchValue(e.target.value)} placeholder="Search for a movie to nominate"/>
    )

}

export default SearchInput;