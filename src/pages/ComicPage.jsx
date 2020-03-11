import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { thumbSrc } from '../services/helper';
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
      flexFlow: 'column'
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
    
    <Box>
      <Typography variant="h4">
        {comic.title}
      </Typography>
    </Box>
    </Paper>
  );
}
