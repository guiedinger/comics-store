import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import ToolBar from './components/ToolBar';
import Comics from './pages/ComicsPage';
import Cart from './pages/CartPage';

export default (props) => {
  return (
    <Router>
      <ToolBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/:page?">
            <Comics></Comics>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}