import React from 'react';

import DashboardCalendarWeek from '../../assets/DashboardCalendarWeek';
import DashboardCalendarSchedule from '../../assets/DashboardCalendarSchedule';
const CalendarComponent = () => {
  return (
    <div className='section-container'>
      <DashboardCalendarWeek />
      <div className='section-title'>Thursday, March 18</div>
      <DashboardCalendarSchedule />
    </div>
  );
};

export default CalendarComponent;
