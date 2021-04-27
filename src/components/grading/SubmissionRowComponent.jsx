import React from 'react';
import { Grid } from '@material-ui/core';


const SubmissionRowComponent = (props) => {
  return (
    <div>
      <Grid container direction='row' spacing={3} alignItems='center'>
        <Grid item xs={3}>
          <div>
            <span><div className="textfont">📝Assignment Name</div></span>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="textfont">Audio</div>
        </Grid>
        <Grid item xs={3}>
          <div className="textfont">Feb 22.</div>
        </Grid>
        <Grid item xs={2}>
          <div className="textfont">26/28</div>
        </Grid>
        <Grid item xs={2}>
          <div className='tooltip'>
            <button className='secondary-btn' onClick={props.toggleIsGrading}>
              Grade All
            </button>
            <span className='tooltiptext'>1. Click to view the assignment</span>
          </div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default SubmissionRowComponent;
