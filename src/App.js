import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { Container } from '@material-ui/core';

import WeeklyTasksFeature from './features/WeeklyTasksFeature';
import GradingFeature from './features/GradingFeature';
import VideoCallFeature from './features/VideoCallFeature';

import './index.css';

const App = () => {
  return (
    <Container>
      <Router>
        <nav>
          <ul className='features-nav'>
            <li>
              <Link to='/tasks-feature'>Weekly Tasks</Link>
            </li>
            <li>
              <Link to='/grades-feature'>Grading</Link>
            </li>
            <li>
              <Link to='/video-feature'>Video</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/tasks-feature'>
            <h4>Description of tasks feature</h4>
            <WeeklyTasksFeature />
          </Route>
          <Route path='/grades-feature'>
            <h4>Description of grades feature</h4>

            <GradingFeature />
          </Route>
          <Route path='/video-feature'>
            <h4>Description of video call feature</h4>
            <VideoCallFeature />
          </Route>
          <Redirect to='/tasks-feature' />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
