import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from '../assets/Menu';
import Logo from '../assets/Logo';
import Navbar from '../assets/Navbar';

const HeaderComponent = () => {
  return (
    <header>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={1}>
          <Menu />
        </Grid>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid item xs={8}>
          <Navbar />
        </Grid>
      </Grid>
    </header>
  );
};

export default HeaderComponent;
