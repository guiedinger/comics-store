import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Typography, Avatar } from '@material-ui/core';
import { avatarSrc } from '../services/helper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    width: '250px',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(1),
    transition: 'all 0.3s ease-out',
    borderRadius: '50%',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
  },
}));

export default ({ item, type, isListLoading }) => {
  const classes = useStyles();
  const uri = item && item.resourceURI.split("/");
  const id = item && uri[uri.length - 1];
  const resourcePath = item && uri[uri.length - 2];
  const [imageSrc, setImageSrc] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (item)
      api.get(`${resourcePath}/${id}`)
        .then((res) => {
          if (res.data.data.results[0].thumbnail.path.split("/").pop() !== "image_not_available")
            setImageSrc(avatarSrc(res.data.data.results[0].thumbnail));
          setIsLoading(false);
        });
  }, [id, resourcePath, item]);
  return (
    <div key={id} className={classes.root}>
      {isLoading || isListLoading ?
        (
          <>
            <Skeleton animation="wave" variant="rect" className={classes.avatar} />
            <Skeleton animation="wave" height={32} width="3.5rem" />
          </>
        ) : (
          <>
            <Avatar alt={item.name} className={classes.avatar} src={imageSrc} />
            <Typography >
              {type !== "creators" && item.name}
              {type === "creators" && `${item.name} (${item.role})`}
            </Typography>
          </>
        )
      }
    </div>
  );
}