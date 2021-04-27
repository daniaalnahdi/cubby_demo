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
          <Link to='/tasks'>
            <button className='titlefont'>Weekly Tasks</button>
            </Link>
        </li>
        <li>
          <Link to='/grades'>
            <button className='titlefont'>Grading</button>
            </Link>
        </li>
        <li>
          <Link to='/video'>
            <button className='titlefont'>Video</button>
            </Link>
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
              <p className='textfont'>We will now start a video call conference.</p>
            </BriefComponent>
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
