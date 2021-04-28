import React from 'react';
import { Grid } from '@material-ui/core';

const SubmissionRowComponent = (props) => {
  return (
    <div>
      <Grid container direction='row' spacing={3} alignItems='center'>
        <Grid item xs={5}>
          <div>
            <span>{props.emoji}</span>
            <span>
              <div className='textfont'>{props.title}</div>
            </span>
            <span>
              <div className='textfont'>{props.subtitle}</div>
            </span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='textfont'>{props.date}</div>
        </Grid>
        <Grid item xs={2}>
          <div className='textfont'>{props.submitted}/28</div>
        </Grid>
        <Grid item xs={2}>
          <div className='tooltip'>
            <button
              className='secondary-btn'
              onClick={!!props.tooltip ? props.toggleIsGrading : null}
            >
              Grade All
            </button>
            {props.tooltip && (
              <span className='tooltiptext'>
                1. Click to view the assignment
              </span>
            )}
          </div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default SubmissionRowComponent;
