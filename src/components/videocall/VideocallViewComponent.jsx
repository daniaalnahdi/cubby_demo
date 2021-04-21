import React from 'react';

import VideoCallButtons from '../../assets/VideoCallButtons';
import VideoCallStudentGallery from './VideoCallStudentGallery';

const VideoCallView = () => {
  return (
    <div className='section-container'>
      <div className='tooltip'>
        <VideoCallStudentGallery />
        <span className='tooltiptext'>1. Pick any student to call on</span>
      </div>
      <VideoCallButtons />
    </div>
  );
};

export default VideoCallView;
