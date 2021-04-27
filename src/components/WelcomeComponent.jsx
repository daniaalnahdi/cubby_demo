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
    borderRadius: '25px',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '500px',
  },
};

const WelcomeComponent = () => {
  return (
    <Modal isOpen={true} style={customStyles} ariaHideApp={false}>
      <div className='copy-container welcome-screen'>
        <div className='copy-body'>
          <h1 className='titlefont'>Welcome to Cubby's Online Demo!</h1>
          <p className='textfont'>
            Cubby is an interactive learning management system that targets
            young students (ages 5-7) in remote and hybrid classrooms. Our
            primary goals were to foster social-emotional learning and
            facilitate parent-teacher relationships.
          </p>
          <p className='textfont'>Click on a feature below to test it out!</p>
        </div>
        <div className='copy-buttons'>
          <Link to='/tasks'>
            <button className='secondary-btn'>Add a Tasks</button>
          </Link>
          <Link to='/grades'>
            <button className='secondary-btn'>Grades</button>
          </Link>
          <Link to='/video'>
            <button className='secondary-btn'>Video </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeComponent;
