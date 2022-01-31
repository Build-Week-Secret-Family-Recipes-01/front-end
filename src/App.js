import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/login";
import PageOne from "./components/page_one";
import PageTwo from "./components/page_two";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header>
        <p>Hello there</p>
      </Header>

      <Route exact path="/">
        <Login />
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
      
    </div>
  );
}

export default App;
