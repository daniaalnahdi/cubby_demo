import React from 'react';
import { Grid } from '@material-ui/core';

//Layout Components
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';

//Dashboard Components
import WeeklyTasksComponent from '../components/dashboard/WeeklyTasksComponent';
import CalendarComponent from '../components/dashboard/CalendarComponent';
import BullitenBoardComponent from '../components/dashboard/BulletinBoardComponent';
import InboxComponent from '../components/dashboard/InboxComponent';

const WeeklyTasksFeature = () => {
  return (
    <>
      <HeaderComponent />
      <Grid container direction='row' spacing='3'>
        <Grid item xs={1}>
          <SidebarComponent />
        </Grid>
        <Grid item xs={8}>
          <WeeklyTasksComponent />
          <Grid container direction='row' spacing='3'>
            <Grid item xs={6}>
              <BullitenBoardComponent />
            </Grid>
            <Grid item xs={6}>
              <InboxComponent />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CalendarComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default WeeklyTasksFeature;
