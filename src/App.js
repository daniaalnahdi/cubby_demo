import React, { useState, useEffect } from 'react';
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

import GenericPopupComponent from './components/GenericPopupComponent';

import './index.css';

const MainDemoNav = () => {
  return (
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
  );
};

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path='/tasks-feature'>
            <MainDemoNav />
            <WeeklyTasksFeature />
          </Route>
          <Route path='/grades-feature'>
            <MainDemoNav />
            <GradingFeature />
          </Route>
          <Route path='/video-feature'>
            <MainDemoNav />
            <VideoCallFeature />
          </Route>
          <Route path='/'>
            <GenericPopupComponent isOpen={true}>
              <h2>Welcome to Cubby Demo</h2>
              <p>Select from the features above</p>
              <Link to='/tasks-feature'>
                <button>Add a Task</button>
              </Link>
              <Link to='/grades-feature'>
                <button>Grades</button>
              </Link>
              <Link to='/video-feature'>
                <button>Video </button>
              </Link>
            </GenericPopupComponent>
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
