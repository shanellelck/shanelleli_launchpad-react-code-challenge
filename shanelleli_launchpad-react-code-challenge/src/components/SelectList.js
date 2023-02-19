import React, { useState,useEffect } from "react";

const SelectList = ( props ) => {
    const [list, setList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/info?returns=none');
            const data = await response.json();
            setList(data.data.map(country => country.name));
          } catch (error) {
            console.log(error);
            setError('An error occurred while loading the country list. Please try again later.');
          }
        };
        fetchData();
      }, []);

    const handleSelectChange = event => {
        const optionSelected = event.target.value;
        setSelectedCountry(optionSelected);
        props.onOptionChange(optionSelected);
    };
    
    // sort to render the countries in alphabetical order
    // since the information rendered by the api is random
    const sortedList = [...list].sort((a, b) => a.localeCompare(b));
    return (
        <div className="select-list">
            {error && (
            <div>{error}</div>
            )}
            {list && (
                <select value={selectedCountry} onChange={handleSelectChange}>
                <option value="">--Select a country--</option>
                {sortedList.map(country => (
                    <option key={country} value={country}>
                    {country}
                    </option>
                ))}
                </select>
            )}
        </div>
    );
}

export default SelectList;