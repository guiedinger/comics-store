import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
// import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';


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