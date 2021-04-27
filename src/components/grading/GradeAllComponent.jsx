import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import GradeCheckIcon from './GradeCheckIcon';
import GradeCrossIcon from './GradeCrossIcon';
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
    <div className='section-container'>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={8}>
          <img src={MathHomework} />
        </Grid>
        <Grid item xs={4}>
          <div className='tooltip'>
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
          <div className='tooltip'>
            <textarea
              className='Send comment to family'
              onChange={() => setIsFeedbackWritten(true)}
            />
            {isGradeSelected && !isFeedbackWritten && (
              <span className='tooltiptext'>3. Write some feedback</span>
            )}
          </div>
          <div className='tooltip'>
            <button
              className='secondary-btn'
              onClick={completeTask}>
              Save Button</button>
            {isFeedbackWritten && (
              <span className='tooltiptext'>4. Save Changes</span>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GradeAllComponent;
