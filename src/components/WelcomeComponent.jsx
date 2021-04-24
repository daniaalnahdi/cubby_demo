import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

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

const WelcomeComponent = () => {
  return (
    <Modal
      isOpen={true}
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>Welcome to Cubby Demo</h2>
      <p>Select from the features above</p>
      <Link to='/tasks'>
        <button className='secondary-btn'>Add a Tasks</button>
      </Link>
      <Link to='/grades'>
        <button className='secondary-btn'>Grades</button>
      </Link>
      <Link to='/video'>
        <button className='secondary-btn'>Video </button>
      </Link>
    </Modal>
  );
};

export default WelcomeComponent;
