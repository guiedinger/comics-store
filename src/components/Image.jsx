import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '200px',
    height: '300px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
  },
}));

export default ({ src, alt }) => {
  const classes = useStyles();

  return (
    <img className={classes.root} src={src} alt={alt} />
  );
}