import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import WeeklyTasksThumbnails from '../../assets/WeeklyTasksThumbnails';

const WeeklyTasksComponent = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const selectDay = (e) => {
    setSelectedDay(e.target.innerHTML);
  };

  return (
    <div className='section-container section-container-height-auto '>
      <div className='section-title'>Bulletin Board</div>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={9}>
          <div className='tooltip'>
            <ul className='weekly-tasks-days' onClick={selectDay}>
              <li className={selectedDay === 'Monday' && 'selected'}>Monday</li>
              <li className={selectedDay === 'Tuesday' && 'selected'}>
                Tuesday
              </li>
              <li className={selectedDay === 'Wednesday' && 'selected'}>
                Wednesday
              </li>
              <li className={selectedDay === 'Thursday' && 'selected'}>
                Thursday
              </li>
              <li className={selectedDay === 'Friday' && 'selected'}>Friday</li>
            </ul>
            <span className='tooltiptext'>1. Select a day of the week</span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <button className='primary-btn'>Add New</button>
        </Grid>
      </Grid>
      <div className='weekly-tasks-thumbnails'>
        {selectedDay === 'Monday' && <WeeklyTasksThumbnails />}
      </div>
    </div>
  );
};

export default WeeklyTasksComponent;
