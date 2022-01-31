import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login';
import PageOne from './components/page_one';
import PageTwo from './components/page_two';
import Header from './components/header/Header';
import Logout from './components/logout';
import Home from './components/home';
import Signup from './components/signup';

import PrivateRoute from './components/private_route';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                
                <Switch>
                  <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <PrivateRoute path='/page_one' component={PageOne} />
                <PrivateRoute path='/page_two' component={PageTwo} />
                <Route path='/logout' component={Logout} />
                </Switch>
                
            </Router>
        </div>
    );
}

export default App;
