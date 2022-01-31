import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/login";
import PageOne from "./components/page_one";
import PageTwo from "./components/page_two";
import Header from "./components/header";
import Logout from "./components/logout";
import Home from './components/home';

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

      <Route path="/page_one">
        <PageOne />
      </Route>

      <Route path="/page_two">
        <PageTwo />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>
      
    </div>
  );
}

export default App;
