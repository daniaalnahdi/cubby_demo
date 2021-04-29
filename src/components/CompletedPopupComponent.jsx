import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

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
    padding: '2em',
  },
  overlay: {
    backgroundColor: 'rgba(110, 113, 145, 0.6)',
  },
};

const CompletedPopupComponent = ({ isOpen, body, nextFeatureURL, img }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => window.location.reload()}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='demo-ui copy-container'>
        <div className='copy-body'>
          <h1 className='titlefont' style={{ textAlign: 'center' }}>
            Done! 🎉
          </h1>
          <p className='textfont'>{body}</p>
          <p>Here's a peek of what your students see:</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {!!img && <img style={{ width: '400px', border: '1px solid lightgrey' }} src={img} />}
          </div>
        </div>
        <div className='copy-buttons'>
          <button
            className='secondary-btn feature-btn'
            onClick={() => window.location.reload()}
          >
            Try Again ↺
          </button>
          <Link to={nextFeatureURL}>
            <button className='secondary-btn feature-btn'>
              Try Next Feature →
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default CompletedPopupComponent;
