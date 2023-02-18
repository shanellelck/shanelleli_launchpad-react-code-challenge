import React from "react";

const ZipCodeForm = ({ zipCode, setZipCode }) => {

    const submitZipCodeHandler = (e) => {
        e.preventDefault();
        setZipCode(e.target.value)
    }
    return (
        <form>
            <input value={zipCode} onChange={event => setZipCode(event.target.value)} type="text" className="zipcode-input" placeholder="Enter your zipcode here"></input>
            <button onClick={submitZipCodeHandler} className="submit-button" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    );
}

export default ZipCodeForm;