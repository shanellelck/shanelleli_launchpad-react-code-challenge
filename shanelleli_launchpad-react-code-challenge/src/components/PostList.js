import React from "react";
import PostInfo from './PostInfo';

const PostList = ({ posts, postId }) => {
    const filteredPosts = postId ? posts.filter(post => post.id === parseInt(postId)) : posts;
    return(
        <ul className="post-list">
            {filteredPosts.map(post => (
                <li key={post.id}>
                    <PostInfo post={post}/>
                </li>
            ))}
        </ul>
    );
}

export default PostList;