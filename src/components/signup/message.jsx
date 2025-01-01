// Modal.js
import React from 'react';
import './message.css'; // Make sure to create a CSS file for styles

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{message}</h2>
        <button onClick={onClose} className='message-button'>Close</button>
      </div>
    </div>
  );
};

export default Modal;
