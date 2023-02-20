import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import SelectList from "./components/SelectList";
import UniList from "./components/UniList";
import { getCountries } from './store/countriesActions';

function Universities() {
    const countries = useSelector(state => state.countries.countries);
    const dispatch = useDispatch();
    const [country, setCountry] = useState('Canada');
    
    // function to handle every time the country selected
    // changes

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);
    
    function handleCountryChange(country) {
        setCountry(country);
    }

    return (
        <div className="unis">
            <SelectList onOptionChange={handleCountryChange} countries={countries}/>
            <UniList key={country} country={country}/>
        </div>
        
    );
}

export default Universities;