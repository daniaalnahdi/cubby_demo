import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import GradeAll from '../../assets/GradeAll';
import MathHomework from '../../images/MathHomework.png';

const GradeAllComponent = ({ completeTask }) => {
  const [isGradeSelected, setIsGradeSelected] = useState(false);

  return (
    <div className='section-container'>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={8}>
          Addition and Subtraction
          <img src={MathHomework} />
        </Grid>
        <Grid item xs={4}>
          <GradeAll />
          <div className='tooltip'>
            <button onClick={() => setIsGradeSelected(true)}>
              Grade Button
            </button>
            {!isGradeSelected && (
              <span className='tooltiptext'>2. Assign a Grade</span>
            )}
          </div>
          <div className='tooltip'>
            <button onClick={completeTask}>Save Button</button>
            {isGradeSelected && (
              <span className='tooltiptext'>3. Save Changes</span>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GradeAllComponent;
