import React from "react";

const SelectList = ( props ) => {
  const { countries, onOptionChange, value } = props;

    const handleSelectChange = event => {
        const optionSelected = event.target.value;
        onOptionChange(optionSelected);
    };
    
    // sort to render the countries in alphabetical order
    // since the information rendered by the api is random
    const sortedList = [...countries].sort((a, b) => a.localeCompare(b));
    return (
        <div className="select-list">
            {countries.length === 0 && (
              <p className="loading">Loading countries...</p>
            )}
            {countries.length > 0 && (
                <select value={value} onChange={handleSelectChange}>
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