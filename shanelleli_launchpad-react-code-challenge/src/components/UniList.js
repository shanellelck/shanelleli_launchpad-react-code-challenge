import React, { useState,useEffect } from "react";
import UniInfo from "./UniInfo";

/**
 * This component displays a list of universities for a given country.
 *
 * @param {string} country - The country for which to display universities.
 * @returns {JSX.Element} - The UniList component.
 */
const UniList = ({country}) => {
    const [uniList, setUniList] = useState([]);
    const [error, setError] = useState('');

    // add country as dependency
    useEffect(() => {
      // Fetches the list of universities for the given country
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://universities.hipolabs.com/search?country=${country}`
          );
          const data = await response.json();
          setUniList(data);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
      }, [country]);

    // ensure the list rendered only has unique universities
    // by filtering the duplicates
    const uniqueUniList = uniList.filter((uni, index, array) => {
      return index === array.findIndex((t) => t.name === uni.name);
    });

    // sort the unique list to render the list in alphabetical order
    const sortedUniList = [...uniqueUniList].sort((a, b) => a.name.localeCompare(b.name));
    return(
        <div className="uni-list">
            {error && (
                <div>{error}</div>
            )}
            {uniList && (
                <div>
                    <p className="p-title">List of Universities in {country}</p>
                    {sortedUniList.map(university => (
                        <UniInfo key={university.name} university={university} />
                    ))}
                </div>
            )}
            
        </div>
    );
}

export default UniList;