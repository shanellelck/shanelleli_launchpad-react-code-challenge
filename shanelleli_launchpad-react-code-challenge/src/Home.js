import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions';
import PostList from "./components/PostList";

function Home({ posts, fetchPosts }) {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);
      
    return(
        <div>
            <h1>Posts</h1>
            <div className="options">
                <form>
                    <input className="search-id" placeholder="Enter the id here"></input>
                    <button className="submit-btn">Enter</button>
                </form>
                <button className="add-post">Add a Post</button>
            </div>
            {posts.loading ? (
                <div className="loading">Loading Posts...</div>
            ) : posts.error ? (
                <div>{posts.error}</div>
            ) : posts.posts.length ? (
                <>
                <PostList posts={posts.posts} />
                </>
            ) : (
                <div>No posts found.</div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(Home);