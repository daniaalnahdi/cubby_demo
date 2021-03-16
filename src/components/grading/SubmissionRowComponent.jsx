import React from 'react';
import { Grid } from '@material-ui/core';

import SecondaryButtonComponent from '../SecondaryButtonComponent'

const SubmissionRowComponent = (props, {
  emoji,
  title,
  subtitle,
  hasAudio,
  date,
  submitted,
}) => {
  return (
    <div>
      <Grid container direction='row' spacing={3} alignItems="center">
        <Grid item xs={3}>
          <div>
            <span>📝</span>
            Assignment Name
          </div>
          <div>Subtitle</div>
        </Grid>
        <Grid item xs={2}>
          Audio
        </Grid>
        <Grid item xs={3}>
          Feb 22.
        </Grid>
        <Grid item xs={2}>
          26/28
        </Grid>
        <Grid item xs={2}>
          <SecondaryButtonComponent label="Grade All" clickHandler={props.toggleIsGrading}/>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default SubmissionRowComponent;
