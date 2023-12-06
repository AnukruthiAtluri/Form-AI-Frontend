// User Profile Delete Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <h2>Confirm Action</h2>
        <p>Are you sure you want to delete your account? This action cannot be undone.</p>
        <button onClick={onConfirm} style={buttonStyle}>Yes, Delete</button>
        <button onClick={onClose} style={buttonStyle}>Cancel</button>
      </div>
    </div>
  );
};

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: '5px',
  maxWidth: '500px',
  minHeight: '200px',
  margin: '0 auto',
  padding: '30px',
  textAlign: 'center'
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  cursor: 'pointer'
};

export default Modal;
