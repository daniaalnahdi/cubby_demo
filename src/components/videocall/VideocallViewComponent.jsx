import React, { useState } from 'react';

import VideoCallButtons from '../../assets/VideoCallButtons';
import VideoCallStudentGallery from './VideoCallStudentGallery';
import CompletedPopupComponent from '../CompletedPopupComponent';

const VideoCallView = () => {
  const [hasClickedPullAside, setHasClickedPullAside] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  return (
    <div className='section-container'>
      <div className='tooltip'>
        <VideoCallStudentGallery
          setHasClickedPullAside={() => setHasClickedPullAside(true)}
          setIsTaskComplete={() => setIsTaskComplete(true)}
        />
        {!hasClickedPullAside && (
          <span className='tooltiptext'>
            1. Pick any student to pull aside on
          </span>
        )}
      </div>
      <VideoCallButtons />
      <CompletedPopupComponent isOpen={isTaskComplete}>
        Completed Video Task
      </CompletedPopupComponent>
    </div>
  );
};

export default VideoCallView;
