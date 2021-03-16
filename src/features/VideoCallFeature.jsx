import React from 'react';
import { Grid } from '@material-ui/core';

//Videocall Components
import VideoCallInfoComponent from '../components/videocall/VideocallInfoComponent';
import VideoCallView from '../components/videocall/VideocallViewComponent';

const VideoCallFeature = () => {
  return (
    <>
      <Grid container direction='row' spacing={2} alignContent='center'>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} alignItems='center'>
          <VideoCallInfoComponent/>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <br />
      
      <Grid container direction='row' spacing={2} alignContent='center'>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} alignItems='center'>
          <VideoCallView/>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      </>
  ); 
};

export default VideoCallFeature;
