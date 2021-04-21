import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Modal from 'react-modal';

import WeeklyTasksThumbnails from '../../assets/WeeklyTasksThumbnails';
import GenericPopupComponent from '../GenericPopupComponent';
import CompletedPopupComponent from '../CompletedPopupComponent';

const WeeklyTasksComponent = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const [hasSelectedDay, setHasSelectedDay] = useState(false),
    [hasClickedNew, setHasClickedNew] = useState(false),
    [hasAddedTitle, setHasAddedTitle] = useState(false),
    [hasAddedDesc, setHasAddedDesc] = useState(false),
    [isTaskComplete, setIsTaskComplete] = useState(false);

  const selectDay = (e) => {
    setSelectedDay(e.target.innerHTML);
    setHasSelectedDay(true);
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
            {!hasSelectedDay && (
              <span className='tooltiptext'>1. Select a day of the week</span>
            )}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='tooltip'>
            <button
              className='primary-btn'
              onClick={() => setHasClickedNew(true)}
            >
              Add New
            </button>
            {hasSelectedDay && !hasClickedNew && (
              <span className='tooltiptext'>2. Add a new task</span>
            )}
          </div>
        </Grid>
      </Grid>
      <div className='weekly-tasks-thumbnails'>
        {selectedDay === 'Monday' && <WeeklyTasksThumbnails />}
      </div>
      <GenericPopupComponent
        isOpen={hasClickedNew && !isTaskComplete}
        onRequestClose={() => setIsTaskComplete(true)}
      >
        <div className='tooltip' style={{ marginTop: '2em' }}>
          <input
            type='text'
            placeholder='Insert Title Here'
            onChange={() => setHasAddedTitle(true)}
          />
          {!hasAddedTitle && (
            <span className='tooltiptext'>3. Add a title</span>
          )}
        </div>
        <div className='tooltip' style={{ marginTop: '2em' }}>
          <textarea
            placeholder='Insert a description here'
            onChange={() => setHasAddedDesc(true)}
          ></textarea>

          {hasAddedTitle && !hasAddedDesc && (
            <span className='tooltiptext'>4. Add a description</span>
          )}
        </div>
        <div className='tooltip'>
          <button
            className='primary-btn'
            onClick={() => setIsTaskComplete(true)}
          >
            Publish
          </button>
          {hasAddedTitle && hasAddedDesc && (
            <span className='tooltiptext'>4. Publish task</span>
          )}{' '}
        </div>
      </GenericPopupComponent>
      <CompletedPopupComponent isOpen={isTaskComplete}>
        Completed Adding Task
      </CompletedPopupComponent>
    </div>
  );
};

export default WeeklyTasksComponent;
