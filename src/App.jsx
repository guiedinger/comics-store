import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import api from './services/api';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#202020',
    },
    secondary: {
      main: '#EC1D24',
    },
    action: {
      active: '#FFFFFF',
    }
  },
});

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    alignSelf: 'flex-start',
    padding: '12px',
    background: '#EC1D24',
    fontFamily: 'Impact',
    height: '100%',
  }
}));

export default function App() {
  const classes = useStyles();
  api.get('comics')
    .then( res => {
      console.log(res);
    });
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <ToolBar>
          <Typography variant="h4" className={classes.logo}>
            COMICS STORE
          </Typography>
          <div className={classes.grow}></div>
          <IconButton aria-label="show 4 new mails" >
            <Badge badgeContent={4} color="secondary">
              <CartIcon color="action" />
            </Badge>
          </IconButton>
        </ToolBar>
      </AppBar>
    </ThemeProvider>
  );
}
