import React from 'react';
import { Card, CardMedia, CardContent, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    width: props => props.isSmall ? '90%' : '350px',
    height: props => props.isSmall ? 'auto' : '225px',
    margin: '15px',
  },
  title: {
    maxHeight: '6rem',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexFlow: props => props.isSmall ? 'column': 'row nowrap',
  },
  details: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: props => props.isSmall ? 'auto' : '200px',
  },
  comicImage: {
    width: props => props.isSmall ? '100%' : '150px',
    height: props => props.isSmall ? 'auto' : '225px',
    paddingBottom: props => props.isSmall ? '150%' : '0px',
    alignSelf: 'center',
  }
}));
export default (props) => {
   const { isLoading = true } = props;
  const matches = useMediaQuery('(min-width:375px)');
  const classes = useStyles({ isSmall: !matches });
  const price = props.prices[0].price
    .toLocaleString('en', { style: 'currency', currency: 'USD' });
  const year = new Date(props.dates[0].date).getFullYear();

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
      {
        isLoading ? (
          <Skeleton animation="wave" variant="rect" className={classes.comicImage} />
        ) : (
          <CardMedia
            className={classes.comicImage}
            image={
              `${props.thumbnail.path
              }/portrait_uncanny.${
              props.thumbnail.extension}`
            }
            title={props.title}
          />
        )
      }
        <CardContent className={classes.details}>
          <div>
            <Typography className={classes.title}>
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {year}
            </Typography>
            {!!props.pageCount &&
              <Typography variant="subtitle1" color="textSecondary">
                {props.pageCount} pages
          </Typography>
            }
          </div>
          <Typography component="h6" variant="h6">
            {price}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}