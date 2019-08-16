import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Post from "./pages/Post"
import Search from "./pages/Search"
import View from "./pages/View"
import Hire from "./pages/Hire"
import Header from './pages/Header';


const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/jobs" component={Post} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/view" component={View} />
        <Route exact path="/hire" component={Hire} />
      
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;