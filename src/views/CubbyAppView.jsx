import React from 'react';

import WeeklyTasksFeature from '../features/WeeklyTasksFeature';
import GradingFeature from '../features/GradingFeature';
import VideoCallFeature from '../features/VideoCallFeature';

const CubbyAppView = ({ selectedFeature }) => {
  switch (selectedFeature) {
    case 1:
      return <WeeklyTasksFeature />;
    case 2:
      return <GradingFeature />;
    case 3:
      return <VideoCallFeature />;
    default:
      return;
  }
};

export default CubbyAppView;
