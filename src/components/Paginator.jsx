import React from 'react';
import { Paper, IconButton, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

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
  }
}));

export default (props) => {
  const classes = useStyles();
  const lastPage = parseInt(props.totalComics / props.comicsByPage);
  const showedPages = 5;
  const firstListPage = Math.ceil(props.currentPage + 1 - (showedPages / 2)) > 0 ?
    Math.ceil(props.currentPage + 1 - (showedPages / 2)) : 1;
  const pageList = [1, 2, 3, 4, 5].map((e, i) => i + firstListPage);

  return (
    <Paper className={classes.root}>
      <IconButton color="primary" aria-label="arrow back" component="span">
        <ArrowBack />
      </IconButton>
      {pageList.map((page, i) =>
        <NavLink
          key={i} 
          className={classes.pageLink}
          to={`/${page}`}
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          <Button className={classes.pageButton}>
            {page}
          </Button>
        </NavLink>
      )}
      <IconButton color="primary" aria-label="arrow forward" component="span">
        <ArrowForward />
      </IconButton>
    </Paper>
  );
}