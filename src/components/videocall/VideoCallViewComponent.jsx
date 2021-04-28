import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import VideoCallButtons from '../../assets/VideoCallButtons';
import VideoCallStudentGallery from './VideoCallStudentGallery';
import CompletedPopupComponent from '../CompletedPopupComponent';

const VideoCallView = () => {
  const [hasClickedPullAside, setHasClickedPullAside] = useState(false);
  const [returnedToClass, setReturnedToClass] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  useEffect(() => {
    let popupTimer = setTimeout(() => {
      if (!!returnedToClass) {
        setIsTaskComplete(true);
      }
    }, 1000);
    return () => {
      clearTimeout(popupTimer);
    };
  }, [returnedToClass]);

  return (
    <div
      className='section-container'
      style={{ paddingLeft: '2em', paddingRight: '2em' }}
    >
      <div className='tooltip'>
        <VideoCallStudentGallery
          setHasClickedPullAside={() => setHasClickedPullAside(true)}
          setIsTaskComplete={() => setIsTaskComplete(true)}
          returnedToClass={returnedToClass}
        />
        {!hasClickedPullAside && (
          <span className='tooltiptext'>
            1. Pick any student to pull aside on
          </span>
        )}
      </div>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={10}>
          <div style={{ marginTop: '2em' }}>
            <VideoCallButtons />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div>
            {hasClickedPullAside && !returnedToClass && (
              <div className='tooltip'>
                <button
                  className='secondary-btn orange-btn'
                  onClick={() => setReturnedToClass(true)}
                >
                  Return to Class
                </button>
                <span className='tooltiptext'>
                  2. When you're done with your conversation, hover over the
                  student and click to return to class
                </span>
              </div>
            )}
            {(!hasClickedPullAside || !!returnedToClass) && (
              <button
                className='secondary-btn red-btn'
                onClick={() => setReturnedToClass(true)}
              >
                End Call
              </button>
            )}
          </div>
        </Grid>
      </Grid>
      <CompletedPopupComponent isOpen={isTaskComplete}>
        <p className='textfont'>You started a video call!</p>
        <div className='copy-buttons'>
          <button
            className='secondary-btn'
            onClick={() => window.location.reload()}
          >
            Re-do task
          </button>
          <Link to='/tasks'>
            <button className='secondary-btn'>next task</button>
          </Link>
        </div>
      </CompletedPopupComponent>
    </div>
  );
};

export default VideoCallView;
