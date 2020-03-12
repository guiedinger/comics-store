import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { thumbSrc, comicPrice, comicYear } from '../services/helper';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';

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
    [theme.breakpoints.up('sm')]: {
      padding: '0rem 1.5rem 1rem 1rem'
    },
  },
}));

export default () => {
  const { id } = useParams();
  const classes = useStyles();
  const [comic, setComic] = useState({});
  
  useEffect(() => {
    api.get(`comics/${id}`)
    .then((res) => {
      setComic(res.data.data.results[0]);
    });
  }, [id]);

  return (
    <Paper className={classes.root}>
    <Image src={thumbSrc(comic.thumbnail)} alt={comic.title}/>
    
    <Box className={classes.contentBox}>
      <Typography variant="h4">
        {comic.title}
      </Typography>
      <Typography variant="h6">
        {comicYear(comic.dates)}
      </Typography>
      <Typography variant="h6">
        {comicPrice(comic.prices)}
      </Typography>
      {comic && comic.creators && comic.creators.available > 0 &&
        <>
          <Typography variant="h5">
            Creators
          </Typography>
          {comic.creators.items.map(c => (
            <Typography>
              {`${c.name} (${c.role})`}
            </Typography>
          ))}
        </>  
      }
    </Box>
    </Paper>
  );
}
