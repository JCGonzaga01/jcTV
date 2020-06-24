import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "pages/Home";
import Cinema from "pages/Cinema";
import Free from "pages/Free";
import Subscription from "pages/Subscription";
import SignIn from "pages/SignIn";
import Settings from "pages/Settings";

const routing = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/cinema" component={Cinema} />
      <Route exact path="/free" component={Free} />
      <Route exact path="/subscription" component={Subscription} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/settings" component={Settings} />
    </App>
  </Router>
);

export default routing;
