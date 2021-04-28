import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Menu from '../assets/Menu';
import Logo from '../assets/Logo';
import Navbar from '../assets/Navbar';

const HeaderComponent = () => {
  const currentURL = useLocation().pathname;

  return (
    <header style={{marginBottom: '1em'}}>
      <Grid container direction='row' spacing={3} alignItems='center'>
        <Grid item xs={1}>
          <Menu />
        </Grid>
        <Grid item xs={3}>
          <Logo />
        </Grid>
        <Grid item xs={8}>
          <Navbar path={currentURL}/>
        </Grid>
      </Grid>
    </header>
  );
};

export default HeaderComponent;
