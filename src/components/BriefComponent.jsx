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
    height: '500px',
    borderRadius: '25px',
  },
  overlay: {
    background:
      'linear-gradient(114.44deg,  rgb(131, 78, 233, 0.2) 0%, rgb(98, 89, 236, 0.2) 100%)',
  },
};

const BriefComponent = ({ title, urlPath, children }) => {
  return (
    <Modal isOpen={true} style={customStyles} ariaHideApp={false}>
      <div className='copy-container'>
        <div className='copy-body'>
          <h2>{title}</h2>
          {children}
        </div>
        <div className='copy-buttons'>
          {!!urlPath && (
            <Link to={urlPath}>
              <button className='secondary-btn'>Let's Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default BriefComponent;
