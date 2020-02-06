import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Routes from './Routes'

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

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
