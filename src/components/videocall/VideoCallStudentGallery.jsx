import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import VideoCallStudentThumbnail from './VideoCallStudentThumbnail';
import PlaceholderImage from '../../images/placeholder.png';
import S1 from '../../images/Student1.png';
import S2 from '../../images/Student2.png';
import S3 from '../../images/Student3.png';
import S4 from '../../images/Student4.png';
import S5 from '../../images/Student5.png';
import S6 from '../../images/Student6.png';

import { getByTitle } from '@testing-library/dom';

const VideoCallStudentGallery = ({ setHasClickedPullAside }) => {
  const [pulledAside, setPulledAside] = useState(0);

  const updatePulledAside = (idx) => {
    setPulledAside(idx);
    setHasClickedPullAside(true);
  };

  return (
    <Grid container spacing={1}>
      <VideoCallStudentThumbnail
        src={S5}
        idx={1}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S2}
        idx={2}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S3}
        idx={3}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S4}
        idx={4}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S6}
        idx={5}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S5}
        idx={6}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S4}
        idx={7}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
      <VideoCallStudentThumbnail
        src={S2}
        idx={8}
        pulledAside={pulledAside}
        updatePullAside={updatePulledAside}
      />
    </Grid>
  );
};

export default VideoCallStudentGallery;
