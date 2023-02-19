import React from "react";
import PostInfo from './PostInfo';
const PostList = ({ posts }) => {
    return(
        <ul className="post-list">
            {posts.map(post => (
                <li key={post.id}>
                    <PostInfo post={post}/>
                </li>
            ))}
        </ul>
    );
}

export default PostList;