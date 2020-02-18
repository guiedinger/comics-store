import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import ToolBar from './components/ToolBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Comics from './pages/ComicsPage';
import Cart from './pages/CartPage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   root: {
    flexGrow: 1
   },
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
            <Redirect to="/1"/>
          )}/>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/:page">
            <Comics></Comics>
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}