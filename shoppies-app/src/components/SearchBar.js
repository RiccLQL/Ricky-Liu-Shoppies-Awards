import Button from './Button';
import '../styles/Text.css';
import '../styles/Search.css';

const SearchBar = ({input, updateSearchValue, updateValue}) => {

    /* Render */

    return (
        <div className="container">
            <h4>Movie Title</h4>
            <div className="row-container">
                <input className="search-element" id="search-element" type="text" value={input} onChange={(e) => updateValue(e.target.value)} onKeyDown={(e) => updateSearchValue(e.target.value, e)} placeholder="Search for a movie to nominate"/>
                <Button caption="Search" color="neutral" trigger={(e) => updateSearchValue(document.getElementById("search-element").value, e)}/>
            </div>
        </div>
    );
}

export default SearchBar;