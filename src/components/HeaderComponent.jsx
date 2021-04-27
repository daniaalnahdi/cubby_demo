import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from '../assets/Menu';
import Logo from '../assets/Logo';

const HeaderComponent = () => {
  return (
    <header>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid item xs={8}>
          <ul>
            <li className='titlefont'>Dashboard</li>
            <li className='titlefont'>Feedback</li>
            <li className='titlefont'>Directory</li>
            <li className='titlefont'>Inbox</li>
          </ul>
        </Grid>
      </Grid>
    </header>
  );
};

export default HeaderComponent;
