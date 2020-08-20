import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/css/argon-dashboard-react.css";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css.map";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FrontChannel from "./Components/Layouts/FrontChannel";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/Register" exact component={Register} />
      <Route path="/Login" exact component={Login} /> */}
      <Route path="/admin" render={(props) => <App {...props} />} />
      <Route path="/Index" render={(props) => <FrontChannel {...props} />} />
      <Redirect from="/" to="/Index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
