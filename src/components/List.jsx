import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import api from '../services/api';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  root: {
  },
  items: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
}));

export default ({ from = "comics", identifier, type, isLoading }) => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [isListLoading, setIsListLoading] = useState(true);
  useEffect(() => {
      setIsListLoading(true);
      api.get(`${from}/${identifier}/${type}`)
        .then((res) => {
          setList(res.data.data.results);
          setIsListLoading(false);
        });
    }, [identifier, type, from]);
  return (
    <div className={classes.root}>
      {!isLoading && !isListLoading && list && list.length > 0 &&
        <>
          <Typography variant="h5">
            {type === "characters" && "Characters"}
            {type === "creators" && "Creators"}
          </Typography>
          <div className={classes.items}>
            {list.map(i => (
              <Item item={i} key={i.id} type={type} />
            ))}
          </div>
        </>
      }
      {(isLoading || isListLoading) &&
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