import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <Link to="/cart">
      <IconButton aria-label="show 4 new mails" >
        <Badge badgeContent={3} color="secondary">
          <ShoppingCart color="action" />
        </Badge>
      </IconButton>
    </Link>
  );
}
