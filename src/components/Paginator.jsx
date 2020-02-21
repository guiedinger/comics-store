import React from 'react';
import { Paper, IconButton, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageLink: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    color: '#202020',
  },
  pageButton: {
    minWidth: '35px',
    color: 'inherit',
    fontWeight: 'inherit'
  },
  skeleton: {
    width: '300px',
    height: '48px',
  },
}));

export default (props) => {
  const classes = useStyles();
  const { isLoading = false } = props;
  const lastPage = Math.ceil(props.totalComics / props.comicsByPage);
  const showedPages = 5;
  const firstListPage = Math.ceil(props.currentPage + 1 - (showedPages / 2)) > 0 ?
    Math.ceil(props.currentPage + 1 - (showedPages / 2)) : 1;
  const isFinalListPage = (firstListPage + showedPages) > lastPage;
  const pageList = isFinalListPage ? 
    new Array(showedPages).fill(0).map((e, i) => lastPage - i).reverse() :
    new Array(showedPages).fill(0).map((e, i) => i + firstListPage);
  const isFirstPage = props.currentPage === 0;
  const isLastPage = props.currentPage === lastPage - 1;

  return (
    <Paper className={classes.root}>
    {isLoading ? (
      <Skeleton animation="wave" variant="rect" className={classes.skeleton} />
    ) : (
      <>
        {!isFirstPage && (
          <Link to={`/${props.currentPage}`}>
            <IconButton
              color="primary"
              aria-label="arrow back"
              component="span"
            >
              <ArrowBack />
            </IconButton>
          </Link>
        )}
        {pageList.map((page, i) => (
          <NavLink
            key={i}
            className={classes.pageLink}
            to={`/${page}`}
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Button className={classes.pageButton}>{page}</Button>
          </NavLink>
        ))}
        {!isLastPage && (
          <Link to={`/${props.currentPage + 2}`}>
            <IconButton
              color="primary"
              aria-label="arrow forward"
              component="span"
            >
              <ArrowForward />
            </IconButton>
          </Link>
        )}
      </>
    )}
  </Paper>
  );
}