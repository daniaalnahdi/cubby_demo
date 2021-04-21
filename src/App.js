import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
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
          <ul>
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
            <WeeklyTasksFeature />
          </Route>
          <Route path='/grades-feature'>
            <GradingFeature />
          </Route>
          <Route path='/video-feature'>
            <VideoCallFeature />
          </Route>
          <Redirect to='/tasks-feature' />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
