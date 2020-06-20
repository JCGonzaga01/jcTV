import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "pages/Home";

const routing = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
    </App>
  </Router>
);

export default routing;
