import React, { useState } from "react";

const ZipCodeForm = (props) => {
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(zipCode);
        setZipCode("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input value={zipCode} onChange={event => setZipCode(event.target.value)} type="text" className="zipcode-input" placeholder="Enter your zipcode here"></input>
            <button className="submit-button" type="submit">Lookup</button>
        </form>
    );
}

export default ZipCodeForm;