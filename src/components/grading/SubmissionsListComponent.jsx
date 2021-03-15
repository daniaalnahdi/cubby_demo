import React from 'react';
import { Grid } from '@material-ui/core';

import SubmissionRowComponent from './SubmissionRowComponent'

const SubmissionsListComponent = () => {
  return (
    <div class='section-container'>
      <Grid container direction='row' spacing='3'>
          <Grid item xs='10'>
              <div class="section-title">All Submissions</div>
          </Grid>
          <Grid item xs='2'>
              Sort By
          </Grid>
      </Grid>
      <Grid container direction='row' spacing='3'>
          <Grid item xs='5'>
              Title
          </Grid>
          <Grid item xs='3'>
              Assigned
          </Grid>
          <Grid item xs='4'>
              Submitted
          </Grid>
      </Grid>
      {/* TODO: use dummy data and pass in params */}
      <SubmissionRowComponent/>
    </div>
  );
};

export default SubmissionsListComponent;
