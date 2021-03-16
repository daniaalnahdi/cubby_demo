import React from 'react';

const PopupComponent = () => {
  return (
    <div className='popup-box'>
      <div className='box' onClick={props.handleClose}>
        {props.content}
      </div>
    </div>
  );
};

export default PopupComponent;
