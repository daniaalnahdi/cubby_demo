import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import VideoStudentOptions from '../../assets/VideoStudentOptions';
const VideoCallStudentThumbnail = ({
  idx,
  src,
  pulledAside,
  updatePullAside,
  returnedToClass
}) => {
  return (
    <Grid item xs={3}>
      <div
        className={`video-student-thumbnail ${
          !returnedToClass && pulledAside !== 0 && pulledAside !== idx && 'fade'
        } ${!returnedToClass && pulledAside == idx && 'focus'}`}
      >
        <img src={src} />
        <div className='overlay'>
          <div className='overlay-content'>
            {pulledAside === 0 && (
              <>
                <button
                  className='secondary-btn small-btn white-btn'
                  style={{marginLeft: '25%', marginBottom: '10px'}}
                  onClick={() => updatePullAside(idx)}>Pull Aside</button>
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
