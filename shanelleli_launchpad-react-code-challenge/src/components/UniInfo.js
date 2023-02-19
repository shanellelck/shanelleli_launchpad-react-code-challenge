import React from "react";

/**
 * A component that displays information about a university.
 * @param {Object} props - A props object that holds information about
 *                         a university
 */
const UniInfo = ( { university }) => {

    return(
        <div className="uni-info">
            <h1>{university.name}</h1>
            <div className="uni-location">
                <p>{university.country}</p>
                <p> | {university['state-province']}</p>
            </div>
            <p>Website: <a href={university.web_pages[0]}>{university.web_pages[0]}</a></p>
        </div>
    );
}

export default UniInfo;