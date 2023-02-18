import React, { useState,useEffect } from "react";
import UniInfo from "./UniInfo";

const UniList = () => {
    const [uniList, setUniList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://universities.hipolabs.com/search?country=Canada');
            const data = await response.json();
            setUniList(data);
          } catch (error) {
            setError(error);
          }
        };
        fetchData();
      }, []);

    return(
        <div className="uni-list">
            {error && (
                <div>{error}</div>
            )}
            {uniList && (
                <div>
                    <p className="p-title">List of Universities in Canada</p>
                    {uniList.map(university => (
                        <UniInfo key={university.name} university={university} />
                    ))}
                </div>
            )}
            
        </div>
    );
}

export default UniList;