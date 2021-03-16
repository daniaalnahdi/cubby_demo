import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from '../assets/Menu';

const HeaderComponent = () => {
  return (
    <header>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={2}>
          {/* Cubby Logo Here */}
        </Grid>
        <Grid item xs={8}>
          <ul>
            <li>Dashboard</li>
            <li>Feedback</li>
            <li>Directory</li>
            <li>Inbox</li>
          </ul>
        </Grid>
      </Grid>
    </header>
  );
};

export default HeaderComponent;
