import React from 'react';
import { Grid } from '@material-ui/core';

import VideoCallSettings from '../../assets/VideoCallSettings';

const VideoCallInfoComponent = () => {
  return (
    <div
      className='section-container'
      style={{ paddingLeft: '2em', paddingRight: '2em' }}
    >
      <Grid container alignItems='center'>
        <Grid item xs={1}>
          <span style={{ fontSize: '4.5em' }}>🎨</span>
        </Grid>
        <Grid item xs={7}>
          <h2 className='titlefont' style={{ marginBottom: '10px' }}>
            Art Class
          </h2>
          <div style={{ color: '#6E7191' }}>12:00 PM - 1:00 PM</div>
        </Grid>
        <Grid item xs={4}>
          <VideoCallSettings />
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoCallInfoComponent;
