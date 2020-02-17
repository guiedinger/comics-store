import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Data provided by Marvel. © 2020 MARVEL</Typography>
      </Toolbar>
    </AppBar>
  );
}