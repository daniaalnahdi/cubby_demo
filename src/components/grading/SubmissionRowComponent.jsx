import React from 'react';
import { Grid } from '@material-ui/core';

const SubmissionRowComponent = (props) => {
  return (
    <div>
      <Grid container direction='row' spacing={3} alignItems='center'>
        <Grid item xs={5}>
          <div
            style={{ display: 'flex', marginTop: '1em', marginBottom: '1em' }}
          >
            <div style={{ marginRight: '.5em', fontSize: '45px' }}>
              {props.emoji}
            </div>
            <div>
              <div
                className='textfont'
                style={{ marginBottom: '.5em', fontSize: '18px' }}
              >
                <strong>{props.title}</strong>
              </div>
              <div className='textfont'>{props.subtitle}</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='textfont' style={{ color: '#6E7191' }}>
            {props.date}
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className='textfont'>
            <span style={{ color: '#6E7191' }}>{props.submitted}</span>/28
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className='tooltip'>
            <button
              className='secondary-btn inverted-btn small-btn'
              onClick={!!props.tooltip ? props.toggleIsGrading : null}
            >
              Grade All
            </button>
            {props.tooltip && (
              <span className='tooltiptext'>
                1. Click to view submissions for this task
              </span>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SubmissionRowComponent;
