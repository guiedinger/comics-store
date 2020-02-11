import React, { useState, useEffect } from 'react';
import api from './../services/api';
import ComicCard from './../components/ComicCard';
import Paginator from './../components/Paginator';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px 0px',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column'
  },
  comicsContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
}));

export default (props) => {
  const classes = useStyles();
  const [comics, setComics] = useState([]);
  const [totalComics, setTotalComics] = useState(0);
  const { page } = useParams();
  const comicsByPage = 20;
  const currentPage = !!page && page > 0 ? page - 1 : 0;
  const currentDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    api.get('comics', {
      params: {
        formatType: 'comic',
        dateRange: `1900-01-01,${currentDate}`,
        limit: comicsByPage,
        offset: comicsByPage * currentPage,
      },
    })
      .then(res => {
        const newComics = res.data.data.results;
        //.filter((comic) => !!comic.prices[0].price);
        setComics(newComics);
        setTotalComics(res.data.data.total);
        console.log(newComics);
      });
  }, [currentPage, currentDate]);

  return (
    <div className={classes.root}>
      <div className={classes.comicsContainer}>
        {comics && comics.map(comic =>
          <ComicCard key={comic.id} {...comic} />)}
      </div>
      <Paginator
        currentPage={currentPage}
        comicsByPage={comicsByPage}
        totalComics={totalComics}
      />
    </div>
  );
}
