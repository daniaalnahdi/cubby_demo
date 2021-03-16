import React from 'react';

const SecondaryButtonComponent = ({ label, clickHandler }) => {
  return (
    <button class='secondary-btn' onClick={clickHandler}>
      {label}
    </button>
  );
};

export default SecondaryButtonComponent;
