import React, { useState } from "react";
import ZipCodeForm from './components/ZipCodeForm';
// import ZipCodeInfo from "./components/ZipCodeInfo";

function PostalLookup() {
    const [zipCode, setZipCode] = useState('');
    return(
        <div>
            <ZipCodeForm zipCode={zipCode} setZipCode={setZipCode} />
            {/* <ZipCodeInfo /> */}
        </div> 
    );
}

export default PostalLookup;