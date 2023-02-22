import { 
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from './actionTypes';
import axios from 'axios';

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

export const editPost = (id, post) => ({
  type: EDIT_POST,
  payload: { id, post },
});

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};

const addPostSuccess = (post) => ({
  type: ADD_POST,
  payload: post
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



export const updatePost = (id, post) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

  export const addPost = (title, body, userId) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title,
          body,
          userId
        });
        const post = response.data;
        dispatch(addPostSuccess(post));
        return { success: true, post };
      } catch (error) {
        console.log(error);
        return { success: false, error };
      }
    };
  };
