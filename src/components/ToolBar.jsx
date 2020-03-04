import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    alignSelf: 'flex-start',
    padding: '12px',
    background: '#EC1D24',
    fontFamily: 'Anton',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar>
          <Link to="/" className={classes.logoLink}>
            <Typography variant="h4" className={classes.logo}>
              COMICS STORE
            </Typography>
          </Link>
          <div className={classes.grow}></div>
          <Cart />
        </Toolbar>
      </Container>
    </AppBar>
  );
}