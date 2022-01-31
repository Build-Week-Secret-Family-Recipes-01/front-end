import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/login";
import PageOne from "./components/page_one";
import PageTwo from "./components/page_two";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <p>Hello there</p>

      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign_up">
        <SignUp />
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
