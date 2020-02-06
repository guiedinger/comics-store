import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
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

export default (props) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <ToolBar>
        <Link to="/" className={classes.logoLink}>
          <Typography variant="h4" className={classes.logo}>
            COMICS STORE
          </Typography>
        </Link>
        <div className={classes.grow}></div>
        <Cart />
      </ToolBar>
    </AppBar>
  );
}