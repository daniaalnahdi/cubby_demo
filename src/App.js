import React from 'react';
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

import WelcomeComponent from './components/WelcomeComponent';
import BriefComponent from './components/BriefComponent';

import './index.css';

const MainDemoNav = () => {
  return (
    <nav>
      <ul className='features-nav'>
        <li>
          <Link to='/tasks'>Weekly Tasks</Link>
        </li>
        <li>
          <Link to='/grades'>Grading</Link>
        </li>
        <li>
          <Link to='/video'>Video</Link>
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
          <Route path='/tasks/demo'>
            <MainDemoNav />
            <WeeklyTasksFeature />
          </Route>
          <Route path='/grades/demo'>
            <MainDemoNav />
            <GradingFeature />
          </Route>
          <Route path='/video/demo'>
            <MainDemoNav />
            <VideoCallFeature />
          </Route>
          <Route path='/tasks'>
            <BriefComponent
              title='Tasks Feature'
              body='This is the tasks demo'
              urlPath='/tasks/demo'
            />
          </Route>
          <Route path='/grades'>
            <BriefComponent
              title='Grades Feature'
              body='This is the grades demo'
              urlPath='/grades/demo'
            />
          </Route>
          <Route path='/video'>
            <BriefComponent
              title='Video Feature'
              body='This is the video demo'
              urlPath='/video/demo'
            />
          </Route>
          <Route path='/'>
            <WelcomeComponent />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
