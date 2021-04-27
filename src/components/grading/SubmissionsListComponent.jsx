import React from 'react';
import { Grid } from '@material-ui/core';

import SubmissionRowComponent from './SubmissionRowComponent';

const SubmissionsListComponent = (props) => {
  return (
    <div className='section-container'>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={10}>
          <div className='section-title'>
            All Submissions
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="textfont">Sort By</div>
        </Grid>
      </Grid>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={5}>
          <div className="textfont">Title</div>
        </Grid>
        <Grid item xs={3}>
          <div className="textfont">Assigned</div>
        </Grid>
        <Grid item xs={4}>
          <div className="textfont">Submitted</div>
        </Grid>
      </Grid>
      <SubmissionRowComponent {...props} />
    </div>
  );
};

export default SubmissionsListComponent;
