import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from 'react-redux';
import { addPost } from '../store/postActions';

Modal.setAppElement("#root");

function AddPostModal({ addPost, isOpen, onRequestClose }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddPost = async (event) => {
    event.preventDefault();
    const { success, post, error } = await addPost(title, body, userId);
    if (success) {
      console.log('Post added successfully:', post);
      setTitle('');
      setBody('');
      setUserId('');
      setIsSuccess(true);
      // onRequestClose();
    } else {
      console.log('Error adding post:', error);
    }
  }

  const handleCloseModal = () => {
    setIsSuccess(false);
    setTitle('');
    setBody('');
    setUserId('');
    onRequestClose();
  }

  return (
    <Modal className="modal" isOpen={isOpen} onRequestClose={handleCloseModal}>
      <button onClick={handleCloseModal} className="close-down-btn"><i class="fa-solid fa-lg fa-xmark"></i></button>
      <h2 className="add-post-title">Add a Post</h2>
      {isSuccess ? (
        <>
          <p className="success-msg">Post added successfully!</p>
          <button className="close-btn" onClick={handleCloseModal}>Close</button>
        </>
      ) : (
        <form className="new-post-form" onSubmit={handleAddPost}>
          <label className="new-post-label" htmlFor={title} >Post Title</label>
          <input className="new-post-input" type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter the title here" required></input>
          <label className="new-post-label" htmlFor={body} >Content</label>
          <textarea className="new-post-input" value={body} onChange={(event) => setBody(event.target.value)} placeholder="Enter text here" required></textarea>
          <button className="add-post-btn" type="submit">Add Post</button>
        </form>
      )}
    </Modal>
  );
}

export default connect(null, { addPost })(AddPostModal);
