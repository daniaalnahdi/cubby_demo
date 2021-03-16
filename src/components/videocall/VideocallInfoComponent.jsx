import React from 'react';
import { Grid } from '@material-ui/core';


const VideocallInfoComponent = ({
  emoji,
  title,
  subtitle,
  hasAudio,
  date,
  submitted,
}) => {
  return (
    <div className='section-container'>
          <Grid container direction='row' spacing='3' alignItems="center">
              <Grid item xs='3'>
                  <h2>Art Class</h2>
                  <div>12:00 PM - 1:00 PM</div>
              </Grid>
      </Grid>
    </div>
  );
};

export default VideocallInfoComponent;
