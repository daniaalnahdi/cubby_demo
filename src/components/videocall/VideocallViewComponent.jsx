import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

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
    <div className='section-container'>
      <div className='tooltip'>
        <VideoCallStudentGallery
          setHasClickedPullAside={() => setHasClickedPullAside(true)}
          setIsTaskComplete={() => setIsTaskComplete(true)}
        />
        {!hasClickedPullAside && (
          <span className='tooltiptext'>
            1. Pick any student to pull aside on
          </span>
        )}
      </div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          {/* TODO: re-export without end call button */}
          <VideoCallButtons />
        </Grid>
        <Grid item xs={2}>
          {hasClickedPullAside && !returnedToClass && (
            <div className='tooltip'>
              <button onClick={() => setReturnedToClass(true)}>
                Return to Class
              </button>
              <span className='tooltiptext'>
                2. When you're done with your conversation, hover over the
                student and click to return to class
              </span>
            </div>
          )}
          {(!hasClickedPullAside || !!returnedToClass) && (
            <button onClick={() => setReturnedToClass(true)}>End Call</button>
          )}
        </Grid>
      </Grid>
      <CompletedPopupComponent isOpen={isTaskComplete}>
        Completed Video Task
      </CompletedPopupComponent>
    </div>
  );
};

export default VideoCallView;
