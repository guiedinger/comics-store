import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import ToolBar from './components/ToolBar';
import Home from './pages/HomePage';
import Cart from './pages/CartPage';

export default (props) => {
  return (
    <Router>
      <ToolBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}