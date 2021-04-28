import React from 'react';
import { Grid } from '@material-ui/core';

//Videocall Components
import VideoCallInfoComponent from '../components/videocall/VideoCallInfoComponent';
import VideoCallView from '../components/videocall/VideoCallViewComponent';

const VideoCallFeature = () => {
  return (
    <div className='cubby-ui'>
      <Grid container direction='row' spacing={3} alignContent='center'>
        <Grid item xs={12}>
          <VideoCallInfoComponent />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <VideoCallView />
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoCallFeature;
