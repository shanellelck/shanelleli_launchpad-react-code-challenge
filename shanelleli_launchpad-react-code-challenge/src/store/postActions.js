import { 
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST
} from './actionTypes'

// Action creators
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error
});

// Thunk action creator
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
      .then(response => response.json())
      .then(data => dispatch(fetchPostsSuccess(data)))
      .catch(error => dispatch(fetchPostsFailure(error)));
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};
