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

import useWindowSize from './hooks/useWindowSize';

import './index.css';

const App = () => {
  const size = useWindowSize();
  const isDesktop = size.width >= 1200;

  return (
    <>
      <Router>
        <Switch>
          <Route path='/tasks/demo'>
            {!!isDesktop && (
              <>
                <DemoFeaturesNav />
                <Container>
                  <WeeklyTasksFeature />
                </Container>
              </>
            )}
          </Route>
          <Route path='/grades/demo'>
            {!!isDesktop && (
              <>
                <DemoFeaturesNav />
                <Container>
                  <GradingFeature />
                </Container>
              </>
            )}
          </Route>
          <Route path='/video/demo'>
            {!!isDesktop && (
              <>
                <DemoFeaturesNav />
                <Container>
                  <VideoCallFeature />
                </Container>
              </>
            )}
          </Route>
          <Route path='/tasks'>
            {!!isDesktop && (
              <>
                <BriefComponent title='Tasks Feature' urlPath='/tasks/demo'>
                  <p className='textfont'>
                    We will now add a task for a student.
                  </p>
                </BriefComponent>
              </>
            )}
          </Route>
          <Route path='/grades'>
            {!!isDesktop && (
              <>
                <BriefComponent title='Grades Feature' urlPath='/grades/demo'>
                  <p className='textfont'>We will now enter student grades.</p>
                </BriefComponent>
              </>
            )}
          </Route>
          <Route path='/video'>
            {!!isDesktop && (
              <>
                <BriefComponent title='Video Feature' urlPath='/video/demo'>
                  <p className='textfont'>
                    We will now start a video call conference.
                  </p>
                </BriefComponent>
              </>
            )}
          </Route>
          <Route path='/'>{!!isDesktop && <WelcomeComponent />}</Route>
          <Redirect to='/' />
        </Switch>
      </Router>
      {!isDesktop && (
        <BriefComponent title='👋 Hey there!'>
          <p className='textfont'>
            Make sure you're on a desktop or tablet screen to view the online
            demo of Cubby!
          </p>
        </BriefComponent>
      )}
    </>
  );
};

export default App;
