import React, { useState } from "react";
import axios from 'axios';
import ZipCodeForm from './components/ZipCodeForm';
import ZipCodeInfo from "./components/ZipCodeInfo";

function PostalLookup() {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleZipCodeSubmit = (zipCode) => {
        if (zipCode) {
            axios.get(`https://api.zippopotam.us/us/${zipCode}`)
            .then(response => {
                setInfo(response.data);
                setError(null);
            })
            .catch(error => {
                setInfo(null);
                setError('Error fetching ZIP code information');
            });
        }
    }
    return(
        <div>
            <ZipCodeForm onSubmit={handleZipCodeSubmit} />
            <ZipCodeInfo info={info} error={error}/>
        </div> 
    );
}

export default PostalLookup;