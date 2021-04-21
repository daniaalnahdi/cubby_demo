import React from 'react';
import { Grid } from '@material-ui/core';


const SubmissionRowComponent = (props) => {
  return (
    <div>
      <Grid container direction='row' spacing={3} alignItems='center'>
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
          <div class='tooltip'>
            <button class='secondary-btn' onClick={props.toggleIsGrading}>
              Grade All
            </button>
            <span class='tooltiptext'>1. Click to view the assignment</span>
          </div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default SubmissionRowComponent;
