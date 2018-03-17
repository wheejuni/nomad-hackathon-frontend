import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";

import "./App.css";
import "antd/dist/antd.min.css";

const App = () => (
  <Router>
    <div>
      <Header />
      {/* <Route exact path="/docs" component={Docs} /> */}
      {/* <Route exact path="/upload" component={Upload} /> */}
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);

export default App;
