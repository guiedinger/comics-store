import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import ToolBar from './components/ToolBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Comics from './pages/ComicsPage';
import Comic from './pages/ComicPage';
import Cart from './pages/CartPage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  '@global': {
    '::-webkit-scrollbar': {
      width: '1rem',
    },
    '::-webkit-scrollbar-track': {
      background: theme.palette.primary.main,
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.palette.secondary.main,
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.secondary.ligth,
    }
  }
}));



export default () => {
  const classes = useStyles();
  return (
    <Router>
      <ScrollToTop />
      <ToolBar />
      <Container maxWidth="md" className={classes.root}>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/1" />
          )} />
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/comic/:id">
            <Comic />
          </Route>
          <Route path="/:page">
            <Comics />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}