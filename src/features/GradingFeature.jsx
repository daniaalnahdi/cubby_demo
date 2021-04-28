import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


// Popup
import CompletedPopupComponent from '../components/CompletedPopupComponent';

//Layout Components
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';

//Grading Components
import SubmissionsListComponent from '../components/grading/SubmissionsListComponent';
import GradeAllComponent from '../components/grading/GradeAllComponent';

const GradingFeature = () => {
  const [isGrading, setIsGrading] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  const toggleIsGrading = () => {
    setIsGrading(!isGrading);
  };

  return (
    <div className='cubby-ui'>
      <HeaderComponent />
      <Grid container direction='row' spacing={2}>
        <Grid item xs={1}>
          <SidebarComponent />
        </Grid>
        <Grid item xs={11}>
          {isGrading ? (
            <GradeAllComponent completeTask={() => setIsTaskComplete(true)} />
          ) : (
            <SubmissionsListComponent toggleIsGrading={toggleIsGrading} />
          )}
        </Grid>
      </Grid>
      <CompletedPopupComponent isOpen={isTaskComplete}>
        <p className='textfont'>You added a grade!</p>
        <div className='copy-buttons'>
          <button
            className='secondary-btn'
            onClick={() => window.location.reload()}
          >
            Re-do task
          </button>
          <Link to='/video'>
            <button
            className='secondary-btn'
          >
            next task</button>
          </Link>
        </div>
      </CompletedPopupComponent>
    </div>
  );
};

export default GradingFeature;
