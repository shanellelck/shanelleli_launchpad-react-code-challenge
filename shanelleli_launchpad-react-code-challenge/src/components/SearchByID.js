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
        <form className="searchId-form" onSubmit={handleSearch}>
            <button className="searchId-submit-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            <input className="searchId-input" type="text" value={searchTerm} onChange={handleInputChange} placeholder="Enter the id here"></input>
            <button className="searchId-clear-btn" type="button" onClick={handleClear}>Clear</button>
        </form>
    )
}

export default SearchByID;