import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import VideoStudentOptions from '../../assets/VideoStudentOptions';
const VideoCallStudentThumbnail = ({
  idx,
  src,
  pulledAside,
  updatePullAside,
  updateReturnedToClass,
}) => {
  return (
    <Grid item xs={3}>
      <div
        className={`video-student-thumbnail tooltip ${
          pulledAside !== 0 && pulledAside !== idx && 'fade'
        } ${pulledAside == idx && 'focus'}`}
      >
        <img src={src} />
        <div className='overlay'>
          <div className='overlay-content'>
            {pulledAside === 0 && (
              <>
                <button onClick={() => updatePullAside(idx)}>Pull Aside</button>
                <VideoStudentOptions />
              </>
            )}
            {pulledAside === idx && (
              <>
                <button
                  onClick={() => {
                    updatePullAside(0);
                    updateReturnedToClass();
                  }}
                >
                  Return to Class
                </button>
              </>
            )}
          </div>
        </div>
        {pulledAside === idx && (
          <span className='tooltiptext'>
            2. When you're done with your conversation, hover over the student
            and click to return to class
          </span>
        )}
      </div>
    </Grid>
  );
};

export default VideoCallStudentThumbnail;
