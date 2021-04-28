import React from 'react';
import Modal from 'react-modal';

//Popup Style
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '40px',
    backgroundColor: '#f7f7fc',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '550px',
    padding: '2em 4.5em',
    overflow: 'hidden'
  },
  overlay: {
    backgroundColor: 'rgba(110, 113, 145, 0.6)',
  },
};

const GenericPopupComponent = ({ children, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default GenericPopupComponent;
