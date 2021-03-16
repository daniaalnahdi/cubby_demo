import React from 'react';
import { Grid } from '@material-ui/core';

//Layout Components
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';

//Dashboard Components
import WeeklyTasksComponent from '../components/dashboard/WeeklyTasksComponent';
import CalendarComponent from '../components/dashboard/CalendarComponent';
import BulletinBoardComponent from '../components/dashboard/BulletinBoardComponent';
import InboxComponent from '../components/dashboard/InboxComponent';

const WeeklyTasksFeature = () => {
  return (
    <>
      <HeaderComponent />
      <Grid container direction='row' spacing={2}>
        <Grid item xs={1}>
          <SidebarComponent />
        </Grid>
        <Grid item xs={7}>
          <WeeklyTasksComponent />
          <Grid container direction='row' spacing={2}>
            <Grid item xs={5}>
              <BulletinBoardComponent />
            </Grid>
            <Grid item xs={7}>
              <InboxComponent />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <CalendarComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default WeeklyTasksFeature;
