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

const BriefComponent = ({ title, body, urlPath }) => {
  return (
    <Modal
      isOpen={true}
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={urlPath}>
        <button>Let's Get Started</button>
      </Link>
    </Modal>
  );
};

export default BriefComponent;
