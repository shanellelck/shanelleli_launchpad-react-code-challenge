import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../store/postActions';

const PostInfo = ({ post }) => {
    const [edit, setEdit] = useState('');
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deletePost(post.id));
    };

    const handleEdit = () => {
        setEdit('true');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedPost = {
          title: formData.get('title'),
          body: formData.get('body'),
          userId: parseInt(formData.get('userId')),
        };
        dispatch(editPost(post.id, updatedPost));
        setEdit('');
      };

    return(
        <div className="post-container">
            {!edit && (
                <div className="post-info">
                    <span className="post-id">Post ID: {post.id}</span>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">&gt; {post.body}</p>
                    <div className="post-options">
                        <button onClick={handleEdit} className="edit-btn">Edit Post</button>
                        <button onClick={handleDelete} className="delete-btn">Delete Post</button>
                    </div>
                </div>
            )}
            {edit && (
                <form className="edit-form" onSubmit={handleSubmit}>
                    <label htmlFor="userId">User ID</label>
                    <input type="number" name="userId" defaultValue={post.userId} disabled readOnly/>
                    <label htmlFor="postId">Post ID</label>
                    <input type="number" name="postId" defaultValue={post.id} disabled readOnly/>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" defaultValue={post.title} />
                    <label htmlFor="body">Body</label>
                    <textarea name="body" defaultValue={post.body}></textarea>
                    <label htmlFor="userId">User ID</label>
                    <input type="number" name="userId" defaultValue={post.userId} disabled readOnly/>
                    <button type="submit">Save</button>
                </form>
            )}
        </div>
    );
}

export default PostInfo;