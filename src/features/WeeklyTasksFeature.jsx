import React from 'react';
import { Grid } from '@material-ui/core';

//Layout Components
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';

//Dashboard Components
import WeeklyTasksComponent from '../components/tasks/WeeklyTasksComponent';
import CalendarComponent from '../components/tasks/CalendarComponent';
import BulletinBoardComponent from '../components/tasks/BulletinBoardComponent';
import InboxComponent from '../components/tasks/InboxComponent';

const WeeklyTasksFeature = () => {
  return (
    <div className='cubby-ui'>
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
    </div>
  );
};

export default WeeklyTasksFeature;
