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
    try {
      await addPost(title, body, userId);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
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
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <h2>Add a Post</h2>
      {isSuccess ? (
        <>
          <p>Post added successfully!</p>
          <button onClick={handleCloseModal}>Close</button>
        </>
      ) : (
        <form onSubmit={handleAddPost}>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title"></input>
          <input type="text" value={body} onChange={(event) => setBody(event.target.value)} placeholder="Body"></input>
          <input type="number" value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="User ID"></input>
          <button type="submit">Add Post</button>
        </form>
      )}
    </Modal>
  );
}

export default connect(null, { addPost })(AddPostModal);
