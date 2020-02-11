import React from 'react';
import { Paper, IconButton, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

export default (props) => {
  const lastPage = parseInt(props.totalComics / props.comicsByPage);
  const showedPages = 5;
  const firstListPage = (props.currentPage - showedPages / 2) > 0 ?
    (props.currentPage - showedPages / 2) : 1;
  const pageList = [1, 2, 3, 4, 5];

  return (
    <Paper>
      <IconButton color="primary" aria-label="arrow back" component="span">
        <ArrowBack />
      </IconButton>
      {pageList.map((page) =>
        <Button>
          {page}
        </Button>
      )}
      <IconButton color="primary" aria-label="arrow forward" component="span">
        <ArrowForward />
      </IconButton>
    </Paper>
  );
}