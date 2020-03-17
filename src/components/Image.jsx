import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    width: '200px',
    height: '300px',
    flexShrink: 0,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
  },
  image: {
    width: '100%',
    paddingBottom: props => props.isLoading ? '150%' : '0px',
  }
}));

export default ({ src, alt, isLoading = false }) => {
  const classes = useStyles({ isLoading: isLoading });

  return (
    <div className={classes.root}>
      {isLoading ?
        (<Skeleton animation="wave" variant="rect" className={classes.image} />)
        :
        (<img src={src} alt={alt} className={classes.image} />)
      }
    </div>
  );
}