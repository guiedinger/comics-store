import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { thumbSrc, comicPrice, comicYear } from '../services/helper';
import Image from '../components/Image';
import List from '../components/List';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px 0px',
    padding: '1rem',
    display: 'flex',
    flexFlow: 'row',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column',
    },
  },
  contentBox: {
    padding: '1rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: '0rem 1.5rem 1rem 1rem'
    },
  },
}));

export default () => {
  const { id } = useParams();
  const classes = useStyles();
  const [comic, setComic] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.get(`comics/${id}`)
      .then((res) => {
        setComic(res.data.data.results[0]);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Paper className={classes.root}>
      <Image src={thumbSrc(comic.thumbnail)} alt={comic.title} isLoading={isLoading} />
      <Box className={classes.contentBox}>
        {isLoading ?
          (
            <>
              <Skeleton animation="wave" height={41} width="90%" />
              <Skeleton animation="wave" height={32} width="3rem" />
              <Skeleton animation="wave" height={32} width="3.5rem" />
            </>
          ) : (
            <>
              <Typography variant="h4">
                {comic.title}
              </Typography>
              <Typography variant="h6">
                {comicYear(comic.dates)}
              </Typography>
              <Typography variant="h6">
                {comicPrice(comic.prices)}
              </Typography>
            </>
          )
        }
        <List list={comic.characters} type="characters" isLoading={isLoading} />
        <List list={comic.creators} type="creators" isLoading={isLoading} />
      </Box>
    </Paper>
  );
}
