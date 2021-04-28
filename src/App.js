import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from '@material-ui/core';

import WeeklyTasksFeature from './features/WeeklyTasksFeature';
import GradingFeature from './features/GradingFeature';
import VideoCallFeature from './features/VideoCallFeature';

import DemoFeaturesNav from './components/DemoFeaturesNav';
import WelcomeComponent from './components/WelcomeComponent';
import BriefComponent from './components/BriefComponent';

import './index.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/tasks/demo'>
          <DemoFeaturesNav />
          <Container>
            <WeeklyTasksFeature />
          </Container>
        </Route>
        <Route path='/grades/demo'>
          <DemoFeaturesNav />
          <Container>
            <GradingFeature />
          </Container>
        </Route>
        <Route path='/video/demo'>
          <DemoFeaturesNav />
          <Container>
            <VideoCallFeature />
          </Container>
        </Route>
        <Route path='/tasks'>
          <BriefComponent title='Tasks Feature' urlPath='/tasks/demo'>
            <p className='textfont'>We will now add a task for a student.</p>
          </BriefComponent>
        </Route>
        <Route path='/grades'>
          <BriefComponent title='Grades Feature' urlPath='/grades/demo'>
            <p className='textfont'>We will now enter student grades.</p>
          </BriefComponent>
        </Route>
        <Route path='/video'>
          <BriefComponent title='Video Feature' urlPath='/video/demo'>
            <p className='textfont'>
              We will now start a video call conference.
            </p>
          </BriefComponent>
        </Route>
        <Route path='/'>
          <WelcomeComponent />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
