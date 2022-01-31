import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/login";
import PageOne from "./components/page_one";
import PageTwo from "./components/page_two";
import Header from "./components/header";
import Logout from "./components/logout";
import Home from './components/home';
import Signup from "./components/signup";

import PrivateRoute from "./components/private_route";

function App() {
  return (
    <div className="App">
      <Header/>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <PrivateRoute path="/page_one" component={PageOne}/>

      <PrivateRoute path="/page_two" component={PageTwo}/>


      <Route path="/logout">
        <Logout />
      </Route>

    </div>
  );
}

export default App;
