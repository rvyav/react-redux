import React from "react";
import Home from "./components/screens/Home";
import ProfileList from "./components/screens/ProfileList";
import ProfileDetail from "./components/screens/ProfileDetail";
import ProfileCreate from "./components/screens/ProfileCreate";
import ProfileUpdate from "./components/screens/ProfileUpdate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/profile/create" component={ProfileCreate}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile/" component={ProfileList}/>
        <Route exact path="/profile/:id" component={ProfileDetail}/>
        <Route exact path="/profile/:id/update" component={ProfileUpdate}/>
      </Switch>
    </Router>
  );
}

export default App;
