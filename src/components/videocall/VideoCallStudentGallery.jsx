import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import VideoCallStudentThumbnail from './VideoCallStudentThumbnail';
import PlaceholderImage from '../../images/placeholder.png';

const VideoCallStudentGallery = () => {
  const [pulledAside, setPulledAside] = useState(0);

  const updatePulledAside = (idx) => {
    setPulledAside(idx);
    console.log(idx);
  };

  return (
    <Grid container spacing={1}>
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={1}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={2}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={3}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={4}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={5}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={6}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={7}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={8}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
    </Grid>
  );
};

export default VideoCallStudentGallery;
