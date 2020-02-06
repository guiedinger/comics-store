import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '350px',
    height: '225px',
    margin: '15px',
  },
  content: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  details: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: '200px',
  },
  comicImage: {
    width: '150px',
    height: '225px',
    alignSelf: 'center',
  }
}));
export default (props) => {
  const classes = useStyles();
  const price = props.prices[0].price;

  return (
    <Card className={classes.root}>
      <div className={classes.content}>
        <CardMedia
          className={classes.comicImage}
          image={
            `${props.thumbnail.path
            }/portrait_uncanny.${
            props.thumbnail.extension}`
          }
          title={props.title}
        />
        <CardContent className={classes.details}>
          <div>
            <Typography>
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              2019
          </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              460 pages
          </Typography>
          </div>
          <Typography component="h6" variant="h6">
            {`$${price}`}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}