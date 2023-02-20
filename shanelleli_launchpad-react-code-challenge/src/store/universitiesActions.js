import { FETCH_UNIVERSITIES_SUCCESS, FETCH_UNIVERSITIES_FAILURE } from './actionTypes';
  
export const fetchUniversities = (country) => async (dispatch) => {
    dispatch({ type: "FETCH_UNIVERSITIES_REQUEST" });
  
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      const uniqueUniList = data.filter((uni, index, array) => {
        return index === array.findIndex((t) => t.name === uni.name);
      });
      const sortedUniList = [...uniqueUniList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      dispatch({
        type: FETCH_UNIVERSITIES_SUCCESS,
        payload: {
          uniList: sortedUniList,
          country,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_UNIVERSITIES_FAILURE,
        payload: error.message,
      });
    }
  };