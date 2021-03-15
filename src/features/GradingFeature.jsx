import React from 'react';
import { Grid } from '@material-ui/core';

//Layout Components
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';

//Grading Components
import SubmissionsListComponent from '../components/grading/SubmissionsListComponent';


const GradingFeature = () => {
  return (
    <>
      <HeaderComponent />
      <Grid container direction='row' spacing='2'>
        <Grid item xs={1}>
          <SidebarComponent />
        </Grid>
        <Grid item xs={11}>
          <SubmissionsListComponent/>
        </Grid>
      </Grid>
    </>
  );
};

export default GradingFeature;
