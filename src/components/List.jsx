import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  root: {
  },
  items: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
}));

export default ({ list, type, isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isLoading && list && list.available > 0 &&
        <>
          <Typography variant="h5">
            {type === "characters" && "Characters"}
            {type === "creators" && "Creators"}
          </Typography>
          <div className={classes.items}>
            {list.items.map(i => (
              <Item item={i} key={i.resourceURI} type={type} />
            ))}
          </div>
        </>
      }
      {isLoading &&
        <>
          <Skeleton animation="wave" height={41} width="8rem" />
          <div className={classes.items}>
            {new Array(3).fill({}).map((e, i) => (
              <Item isListLoading key={i} />
            ))}
          </div>
        </>
      }
    </div >
  );
}