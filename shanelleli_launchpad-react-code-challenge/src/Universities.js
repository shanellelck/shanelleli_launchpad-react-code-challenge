import React, { useState } from "react";
import SelectList from "./components/SelectList";
import UniList from "./components/UniList";

function Universities() {
    const [country, setCountry] = useState('Canada');

    // function to handle every time the country selected
    // changes
    function handleCountryChange(country) {
        setCountry(country);
    }

    return (
        <div className="unis">
            <SelectList onOptionChange={handleCountryChange} />
            <UniList key={country} country={country} />
        </div>
        
    );
}

export default Universities;