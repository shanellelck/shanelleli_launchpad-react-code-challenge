// postReducer.js
import { 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE,
    EDIT_POST,
    DELETE_POST
} from './actionTypes';
  
const initialState = {
    loading: false,
    posts: [],
    currentPost: '',
    error: ''
};
  
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ''
            };
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            };
        case EDIT_POST:
            const { id, post } = action.payload;
            const updatedPosts = state.posts.map((p) =>
                p.id === id ? { ...p, ...post } : p
            );
            return { ...state, posts: updatedPosts };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        default:
            return state;
    }
};
  
export default postReducer;
  