import React from "react";
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/postActions';

const PostInfo = ({ post }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deletePost(post.id));
    };

    return(
        <div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-id">ID: {post.id}</p>
            <p className="post-body">&gt; {post.body}</p>
            <button className="edit-btn">Edit Post</button>
            <button onClick={handleDelete} className="delete-btn">Delete Post</button>
        </div>
    );
}

export default PostInfo;