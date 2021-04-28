import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import GradeCheckIcon from './GradeCheckIcon';
import GradeCrossIcon from './GradeCrossIcon';
import GradingBreadcrumbs from '../../assets/GradingBreadcrumbs';
import GradingNoteToSelf from '../../assets/GradingNoteToSelf';
import MathHomework from '../../images/MathHomework.png';

const GradeAllComponent = ({ completeTask }) => {
  const [isGradeSelected, setIsGradeSelected] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [isFeedbackWritten, setIsFeedbackWritten] = useState(false);

  const updateSelectedGrade = (grade) => {
    setSelectedGrade(grade);
    setIsGradeSelected(true);
  };

  return (
    <div
      className='section-container'
      style={{ paddingLeft: '2em', paddingRight: '2em' }}
    >
      <GradingBreadcrumbs />
      <Grid container direction='row' spacing={3}>
        <Grid item xs={8}>
          <img src={MathHomework} />
        </Grid>
        <Grid item xs={4}>
          <div className='grades-feedback-options'>
            <div id='grades-feedback-title'>Feedback</div>
            <div className='tooltip grades-toggle'>
              <GradeCrossIcon
                isSelected={selectedGrade === 'cross'}
                updateSelectedGrade={() => updateSelectedGrade('cross')}
              />
              <GradeCheckIcon
                isSelected={selectedGrade === 'check'}
                updateSelectedGrade={() => updateSelectedGrade('check')}
              />
              {!isGradeSelected && (
                <span className='tooltiptext'>2. Assign a Grade</span>
              )}
            </div>
          </div>
          <div className='tooltip textarea'>
            <textarea
              placeholder='Send comment to family'
              onChange={() => setIsFeedbackWritten(true)}
            />
            {isGradeSelected && !isFeedbackWritten && (
              <span className='tooltiptext'>3. Write some feedback</span>
            )}
          </div>
          <GradingNoteToSelf />
          <div className='btns-grading-container'>
            <div className='tooltip'>
              <button className='secondary-btn' onClick={completeTask}>
                Send
              </button>
              {isFeedbackWritten && (
                <span className='tooltiptext'>4. Save Changes</span>
              )}
            </div>
            <button className='secondary-btn grey-btn' onClick={completeTask}>
              Reassign
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GradeAllComponent;
