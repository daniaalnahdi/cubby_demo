import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import WelcomeComponent from './WelcomeComponent';

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
    borderRadius: '25px',
  },
  overlay: {
    background: 'linear-gradient(114.44deg,  rgb(131, 78, 233, 0.3) 0%, rgb(98, 89, 236, 0.3) 100%)',
  },
};

const CompletedPopupComponent = ({ children, isOpen }) => {
  const currentURL = useLocation().pathname;

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
