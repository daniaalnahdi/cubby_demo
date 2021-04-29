import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Logo from '../assets/Logo';

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
    padding: '2em',
  },
  overlay: {
    background:
      'linear-gradient(114.44deg,  rgb(131, 78, 233, 0.2) 0%, rgb(98, 89, 236, 0.2) 100%)',
  },
};

const WelcomeComponent = () => {
  return (
    <Modal isOpen={true} style={customStyles} ariaHideApp={false}>
      <div className='demo-ui copy-container welcome-screen'>
        <div className='copy-body'>
          <div>
            <Logo />
          </div>
          <h1 className='titlefont'>Welcome to Cubby's Online Demo!</h1>
          <p className='textfont'>
            Cubby is an interactive learning management system that targets
            young students (ages 5-7) in remote and hybrid classrooms. Our
            primary goals were to foster social-emotional learning and
            facilitate parent-teacher relationships.
          </p>
          <p className='textfont'>
            In this interactive demo, you'll be able to try out some of our main
            features. <strong>Pick one below to get started!</strong>
          </p>
        </div>
        <div className='copy-buttons'>
          <Link to='/tasks'>
            <button className='secondary-btn feature-btn'>Add a Task</button>
          </Link>
          <Link to='/grades'>
            <button className='secondary-btn feature-btn'>
              Grade a Submission
            </button>
          </Link>
          <Link to='/video'>
            <button className='secondary-btn feature-btn'>
              Start Video Call
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeComponent;
