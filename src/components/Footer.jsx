import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '5px',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography>Data provided by Marvel. © 2020 MARVEL</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}