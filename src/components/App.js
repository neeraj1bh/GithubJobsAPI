import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Singlejob from "./Singlejob";
import Error from "./Error";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/job/:jobid" component={Singlejob} />
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
