import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import VideoCallButtons from '../../assets/VideoCallButtons';
import VideoCallStudentGallery from './VideoCallStudentGallery';
import CompletedPopupComponent from '../CompletedPopupComponent';
import StudentVideo from '../../images/StudentVideo.png'

const VideoCallView = () => {
  const [hasClickedPullAside, setHasClickedPullAside] = useState(false);
  const [returnedToClass, setReturnedToClass] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  return (
    <div className='section-container'>
      <div className='tooltip'>
        <VideoCallStudentGallery
          setHasClickedPullAside={() => setHasClickedPullAside(true)}
          setIsTaskComplete={() => setIsTaskComplete(true)}
          returnedToClass={returnedToClass}
        />
        {!hasClickedPullAside && (
          <span className='tooltiptext'>
            1. Hover over any student's video and click "Pull Aside"
          </span>
        )}
      </div>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={10}>
          <div style={{ marginTop: '1.5em' }}>
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
                  2. When you're done with your conversation, click to resume
                  class
                </span>
              </div>
            )}
            {(!hasClickedPullAside || !!returnedToClass) && (
              <div className='tooltip'>
                <button
                  className='secondary-btn red-btn'
                  onClick={() => setIsTaskComplete(true)}
                >
                  End Call
                </button>
                {returnedToClass && (
                  <span className='tooltiptext'>
                    3. Click to end the video session
                  </span>
                )}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
      <CompletedPopupComponent
        isOpen={isTaskComplete}
        body='You just hosted a virtual class!'
        nextFeatureURL='/tasks'
        img={StudentVideo}
      />
    </div>
  );
};

export default VideoCallView;
