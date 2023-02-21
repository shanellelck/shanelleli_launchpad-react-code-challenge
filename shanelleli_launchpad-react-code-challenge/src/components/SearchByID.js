import React, { useState } from "react";

const SearchByID = ( { onSearch, onClear } ) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = event => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const handleClear = () => {
        setSearchTerm('');
        onClear();
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={searchTerm} onChange={handleInputChange} className="search-id-btn" placeholder="Enter the id here"></input>
            <button type="submit" className="submit-btn">Enter</button>
            <button type="button" onClick={handleClear} className="clear-btn">Clear</button>
        </form>
    )
}

export default SearchByID;