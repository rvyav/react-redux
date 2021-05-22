import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Home from "./components/screens/Home";
import ProfileList from "./components/screens/ProfileList";
import ProfileDetail from "./components/screens/ProfileDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile/" component={ProfileList}/>
        <Route exact path="/profile/:id" component={ProfileDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
