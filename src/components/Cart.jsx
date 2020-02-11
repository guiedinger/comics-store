import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <Link to="/cart">
      <IconButton aria-label="show 4 new mails" >
        <Badge badgeContent={4} color="secondary">
          <CartIcon color="action" />
        </Badge>
      </IconButton>
    </Link>
  );
}
