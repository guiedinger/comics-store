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

export default () => {
  const classes = useStyles();
  const [isLoading, setIsLoading ] = useState(true);
  const [comics, setComics] = useState(new Array(20).fill({}));
  const [totalComics, setTotalComics] = useState(0);
  const { page } = useParams();
  const comicsByPage = 20;
  const currentPage = !!page && page > 0 ? page - 1 : 0;
  const currentDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    setIsLoading(true);
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
        setComics(newComics);
        setTotalComics(res.data.data.total);
        setIsLoading(false);
      });
  }, [currentPage, currentDate]);

  return (
    <div className={classes.root}>
      <div className={classes.comicsContainer}>
        {comics && comics.map((comic, index) =>
          <ComicCard key={isLoading ? index : comic.id} {...comic} isLoading={isLoading} />)}
      </div>
      <Paginator
        currentPage={currentPage}
        comicsByPage={comicsByPage}
        totalComics={totalComics}
        isLoading={isLoading}
      />
    </div>
  );
}
