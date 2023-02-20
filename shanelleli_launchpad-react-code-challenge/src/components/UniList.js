import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUniversities } from "../store/universitiesActions";
import UniInfo from "./UniInfo";

/**
 * This component displays a list of universities for a given country.
 *
 * @param {string} country - The country for which to display universities.
 * @returns {JSX.Element} - The UniList component.
 */
const UniList = ({uniList, country, loading, fetchUniversities}) => {
  
  useEffect(() => {
    fetchUniversities(country);
  }, [country, fetchUniversities]);


    // ensure the list rendered only has unique universities
    // by filtering the duplicates
    const uniqueUniList = uniList.filter((uni, index, array) => {
      return index === array.findIndex((t) => t.name === uni.name);
    });
  
    const sortedUniList = [...uniqueUniList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return(
      <div className="uni-list">
      {loading ? (
        <p>Loading universities...</p>
      ) : (
        <>
          <p className="p-title">List of Universities in {country}</p>
          {sortedUniList.map((university) => (
            <UniInfo key={university.name} university={university} />
          ))}
        </>
      )}
    </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    uniList: state.universities.uniList,
    loading: state.universities.loading,
    country: ownProps.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUniversities: (country) => dispatch(fetchUniversities(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniList);