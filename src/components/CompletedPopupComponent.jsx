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
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '500px',
  },
};

const CompletedPopupComponent = ({ children, isOpen }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => window.location.reload()}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='copy-container'>
        <div className='copy-body'>
          <h2 className='titlefont'>Task Completed!</h2>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default CompletedPopupComponent;
