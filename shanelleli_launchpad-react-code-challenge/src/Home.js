import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from './store/postActions';
import SearchByID from "./components/SearchByID";
import PostList from "./components/PostList";

function Home({ posts, fetchPosts }) {
    const [postId, setPostId] = useState('');
    
    useEffect(() => {
        fetchPosts(); 
    }, [fetchPosts]);
    
    const clearSearch = () => {
        setPostId("");
    };

    return(
        <div>
            <h1>Posts</h1>
            <div className="options">
                <SearchByID onSearch={setPostId} onClear={clearSearch} />
                <button className="add-post">Add a Post</button>
            </div>
            {posts.loading ? (
                <div className="loading">Loading Posts...</div>
            ) : posts.error ? (
                <div>{posts.error}</div>
            ) : (
                <PostList posts={posts.posts} postId={postId} />
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(Home);