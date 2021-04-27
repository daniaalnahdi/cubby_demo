import React from 'react';
import { Grid } from '@material-ui/core';

import VideoCallSettings from '../../assets/VideoCallSettings';

const VideoCallInfoComponent = () => {
  return (
    <div className='section-container'>
      <Grid container alignItems='center'>
        <Grid item xs={1}>
          <span style={{ fontSize: '4em' }}>🎨</span>
        </Grid>
        <Grid item xs={7}>
          <h2 className='titlefont'> Class</h2>
          <div className='titlefont'>12:00 PM - 1:00 PM</div>
        </Grid>
        <Grid item xs={4}>
          <VideoCallSettings />
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoCallInfoComponent;
