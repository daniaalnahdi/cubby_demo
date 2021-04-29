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
                <BriefComponent title='📝 Add a Task' urlPath='/tasks/demo'>
                  <p className='textfont'>
                    Let's try assigning tasks to students!
                  </p>
                  <p>
                    With Cubby, you can schedule and post tasks that are
                    organized by weekday. We support various formats, such as
                    rich text and multimedia uploads, to accomodate your needs
                    and preferences.
                  </p>
                  <p>
                    <strong>
                      Right now, we'll walk through the process of assigning a
                      task in plain text format.
                    </strong>
                  </p>
                </BriefComponent>
              </>
            )}
          </Route>
          <Route path='/grades'>
            {!!isDesktop && (
              <>
                <BriefComponent
                  title='✔️ Grade a Submission'
                  urlPath='/grades/demo'
                >
                  <p className='textfont'>Let's provide feedback to a student's work!</p>
                  <p>
                    Cubby's feedback system is directed at both students and
                    their families to keep everyone engaged in the learning
                    process.
                  </p>
                  <p>
                    <strong>
                      Right now, we'll walk through the process of grading an
                      assignment.
                    </strong>
                  </p>
                </BriefComponent>
              </>
            )}
          </Route>
          <Route path='/video'>
            {!!isDesktop && (
              <>
                <BriefComponent
                  title='📹 Start Video Call'
                  urlPath='/video/demo'
                >
                  <p className='textfont'>
                    Let's try hosting a virtual class through a video call!
                  </p>
                  <p>
                    Cubby's video integration stands out amongst current
                    conferencing tools; it provides many unique features
                    specific to student engagement and facilitating classroom
                    activities.
                  </p>
                  <p>
                    <strong>
                      Right now, we'll test out one of our unique features:
                      "Pull Aside". This allows teachers to have a private
                      conversation with a single student during class.
                    </strong>
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
