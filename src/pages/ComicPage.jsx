import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { thumbSrc } from '../services/helper';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px 0px',
    padding: '1rem',
    display: 'flex',
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
      console.log(res.data.data.results[0]);
    });
  }, [id]);

  return (
    <Paper className={classes.root}>
    <img src={thumbSrc(comic.thumbnail)} alt={comic.title}/>
    
    Comic {id}
    </Paper>
  );
}
