import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Typography, Avatar } from '@material-ui/core';
import { avatarSrc } from '../services/helper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    width: '250px',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(1),
    borderRadius: '50%',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
  },
}));

export default ({ item, type, isListLoading }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      {isListLoading ?
        (
          <>
            <Skeleton animation="wave" variant="rect" className={classes.avatar} />
            <Skeleton animation="wave" height={32} width="3.5rem" />
          </>
        ) : (
          <>
            <Avatar alt={item.name} className={classes.avatar} src={avatarSrc(item.thumbnail)} />
            <Typography >
              {type !== "creators" && item.name}
              {type === "creators" && item.fullName}
            </Typography>
          </>
        )
      }
    </div>
  );
}