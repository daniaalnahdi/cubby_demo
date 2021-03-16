import React from 'react';
import { Grid } from '@material-ui/core';

import GradeAll from '../../assets/GradeAll';
import MathHomework from '../../images/MathHomework.png';

const GradeAllComponent = () => {
  return (
    <div class='section-container'>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={8}>
          Addition and Subtraction
          <img src={MathHomework} />
        </Grid>
        <Grid item xs={4}>
          <GradeAll />
        </Grid>
      </Grid>
    </div>
  );
};

export default GradeAllComponent;
