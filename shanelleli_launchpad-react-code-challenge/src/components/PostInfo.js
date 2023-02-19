import React from "react";

const PostInfo = ({ post }) => {
    return(
        <div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">&gt; {post.body}</p>
            <button className="edit-btn">Edit Post</button>
            <button className="delete-btn">Delete Post</button>
        </div>
    );
}

export default PostInfo;