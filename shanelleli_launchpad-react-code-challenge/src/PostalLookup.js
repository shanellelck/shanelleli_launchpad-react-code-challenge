import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchZipCode } from './store/zipCodeActions';
import ZipCodeForm from './components/ZipCodeForm';
import ZipCodeInfo from "./components/ZipCodeInfo";

function PostalLookup() {
    const dispatch = useDispatch();
    const { info, error, loading} = useSelector(state => state.zipCode);

    const handleZipCodeSubmit = (zipCode) => {
        if (zipCode) {
            dispatch(fetchZipCode(zipCode));
        }
    }
    return(
        <div>
            <ZipCodeForm onSubmit={handleZipCodeSubmit} />
            {loading && <div>Loading...</div>}
            {info && <ZipCodeInfo info={info} error={error}/>}
            {error && <div>{error}</div>}
        </div> 
    );
}

export default PostalLookup;