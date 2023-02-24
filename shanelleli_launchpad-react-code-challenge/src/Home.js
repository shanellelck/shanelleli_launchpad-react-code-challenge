import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchPosts, addPost } from './store/postActions';
import SearchByID from "./components/SearchByID";
import PostList from "./components/PostList";
import AddPostModal from "./components/AddPostModal";

function Home({ posts, fetchPosts }) {
    const [postId, setPostId] = useState('');
    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);
    
    useEffect(() => {
        fetchPosts(); 
    }, [fetchPosts]);
    
    const clearSearch = () => {
        setPostId("");
    };

    const handleAddPostModalOpen = () => {
        setIsAddPostModalOpen(true);
    }
    
    const handleAddPostModalClose = () => {
        setIsAddPostModalOpen(false);
    }

    return(
        <div>
            <h1 className="homepage-title">Posts</h1>
            <div className="homepage-options">
                <SearchByID onSearch={setPostId} onClear={clearSearch} />
                <button className="add-post" onClick={handleAddPostModalOpen}>Add a Post</button>
            </div>
            {posts.loading ? (
                <div className="loading">Loading Posts...</div>
            ) : posts.error ? (
                <div>{posts.error}</div>
            ) : (
                <PostList posts={posts.posts} postId={postId} />
            )}
            <AddPostModal isOpen={isAddPostModalOpen} onRequestClose={handleAddPostModalClose} addPost={addPost} />
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts, addPost })(Home);