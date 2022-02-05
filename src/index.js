import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './components/login';
import Header from './components/header/Header';
import Logout from './components/logout';
import Signup from './components/signup';
import AddRecipe from './components/addRecipe/AddRecipe';


import PrivateRoute from './components/private_route';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />

            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <PrivateRoute path='/add' component={AddRecipe} />
                <PrivateRoute path='/edit/:id' component={AddRecipe} />
                <Route path='/logout' component={Logout} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
