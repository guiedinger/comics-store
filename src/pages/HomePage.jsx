import React, { useState, useEffect } from 'react';
import api from './../services/api';
import ComicCard from './../components/ComicCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    margin: '50px 0px',
  },
}));

export default (props) => {
  const classes = useStyles();
  const [comics, setComics] = useState([]);
  useEffect(() => {
    api.get('comics', {
      params: {
        formatType: "comic",
      },
    })
      .then(res => {
        setComics(res.data.data.results);
        console.log(res.data.data.results);
      });
  }, [])
  return (
    <div className={classes.root}>
      {comics && comics.map(comic =>
        <ComicCard key={comic.id} {...comic} />)}
    </div>
  );
}
