import React from "react";

const ZipCodeInfo = ({ info, error }) => {
    return(
        <div className="zip-info">
            {error && (
                <div>{error}</div>
            )}
            {info && (
                <div>
                    <p>Results for Post Code: {info['post code']}</p>
                    <table>
                        <tr>
                            <th>Country</th>
                            <th>Country Abbreviation</th>
                            <th>State</th>
                            <th>Place Name</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                        </tr>
                        <tr>
                            <td>{info['country']}</td>
                            <td>{info['country abbreviation']}</td>
                            <td>{info.places[0]['state']}</td>
                            <td>{info.places[0]['place name']}</td>
                            <td>{info.places[0]['longitude']}</td>
                            <td>{info.places[0]['latitude']}</td>
                        </tr>
                    </table>
                </div>
        )}
        </div>
    );
}

export default ZipCodeInfo;