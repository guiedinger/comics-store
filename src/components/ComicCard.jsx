import React from 'react';
import { Card, CardMedia, CardContent, CardActionArea, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { thumbSrc } from '../services/helper';

const useStyles = makeStyles(theme => ({
  root: {
    width: props => props.isSmall ? '90%' : '350px',
    height: props => props.isSmall ? 'auto' : '225px',
    margin: '15px',
    transition: 'transform 0.5s ease-out',
    '&:hover': {
      transform: 'scale(1.05)',
    }
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
  actionArea: {
    width: props => props.isSmall ? '100%' : '150px',
    height: props => props.isSmall ? 'auto' : '225px',
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
    new Date((props.dates && props.dates[0].date && Date(props.dates[0].date))
      || Date.now()).getFullYear();
  const imageSrc = thumbSrc(props.thumbnail);

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
        {
          isLoading ? (
            <Skeleton animation="wave" variant="rect" className={classes.comicImage} />
          ) : (
              <CardActionArea className={classes.actionArea}>
                <Link to={`/comic/${props.id}`}>
                  <CardMedia
                    className={classes.comicImage}
                    image={imageSrc}
                    title={props.title}
                  />
                </Link>
              </CardActionArea>
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