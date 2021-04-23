import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import VideoStudentOptions from '../../assets/VideoStudentOptions';
const VideoCallStudentThumbnail = ({
  idx,
  src,
  pulledAside,
  updatePullAside,
}) => {
  return (
    <Grid item xs={3}>
      <div
        className={`video-student-thumbnail ${
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
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default VideoCallStudentThumbnail;
