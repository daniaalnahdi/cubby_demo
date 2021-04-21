import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import VideoCallStudentThumbnail from './VideoCallStudentThumbnail';
import PlaceholderImage from '../../images/placeholder.png';

const VideoCallStudentGallery = ({
  setHasClickedPullAside,
  setIsTaskComplete,
}) => {
  const [pulledAside, setPulledAside] = useState(0);
  const [returnedToClass, setReturnedToClass] = useState(false);

  useEffect(() => {
    let popupTimer = setTimeout(() => {
      if (!!returnedToClass) {
        setIsTaskComplete();
      }
    }, 1000);
    return () => {
      clearTimeout(popupTimer);
    };
  }, [returnedToClass]);

  const updatePulledAside = (idx) => {
    setPulledAside(idx);
    setHasClickedPullAside(true);
  };

  const updateReturnedToClass = () => {
    setReturnedToClass(true);
  };

  return (
    <Grid container spacing={1}>
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={1}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={2}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={3}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={4}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={5}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={6}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={7}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
      <VideoCallStudentThumbnail
        src={PlaceholderImage}
        idx={8}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
        updateReturnedToClass={updateReturnedToClass}
      />
    </Grid>
  );
};

export default VideoCallStudentGallery;
