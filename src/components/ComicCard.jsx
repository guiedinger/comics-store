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
    flexFlow: props => props.isSmall ? 'column' : 'row nowrap',
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
  const { isLoading = false } = props;
  const matches = useMediaQuery('(min-width:375px)');
  const classes = useStyles({ isSmall: !matches });
  const price =
    ((props.prices && props.prices[0].price) || 0)
      .toLocaleString('en', { style: 'currency', currency: 'USD' });
  const year =
    new Date((props.dates && props.dates[0].date)
      || Date.now()).getFullYear();
  const imageSrc =
    (
      props.thumbnail
      && props.thumbnail.path
      && props.thumbnail.extension
    ) ? (
        `${props.thumbnail.path
        }/portrait_uncanny.${
        props.thumbnail.extension}`
      ) : (
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'
      );

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
        {
          isLoading ? (
            <Skeleton animation="wave" variant="rect" className={classes.comicImage} />
          ) : (
              <CardMedia
                className={classes.comicImage}
                image={imageSrc}
                title={props.title}
              />
            )
        }
        <CardContent className={classes.details}>
          <div>
            {
              isLoading ? (
                <>
                  <Skeleton animation="wave" height={26} width="90%" />
                  <Skeleton animation="wave" height={20} width="25%" />
                  <Skeleton animation="wave" height={20} width="50%" />
                </>
              ) : (
                  <>
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
                  </>
                )
            }

          </div>
          {
            isLoading ? (
              <Skeleton animation="wave" height={30} width="40%" />
            ) : (
                <Typography component="h6" variant="h6">
                  {price}
                </Typography>
              )
          }
        </CardContent>
      </div>
    </Card>
  );
}