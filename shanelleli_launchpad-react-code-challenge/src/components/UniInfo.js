import React from "react";

const UniInfo = ( { university }) => {

    return(
        <div className="uni-info">
            <h1>{university.name}</h1>
            <p>Country: {university.country}</p>
            <p>Website: <a href={university.web_pages[0]}>{university.web_pages[0]}</a></p>
        </div>
    );
}

export default UniInfo;