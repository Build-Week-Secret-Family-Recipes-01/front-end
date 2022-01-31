import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return(
      <header>
          <div className='header-left'>
              <Link to='/'>BloomTech Secret Recipes</Link>
            </div>
          <div className='header-right'>
              <Link to="/">Home</Link><br/>
              <Link to="login">Login</Link><br/>
              <Link to="#">Create an Account</Link><br/>
              <Link to="page_one">Page One</Link><br/>
              <Link to="page_two">Page Two</Link><br/>
              <Link to="logout">Logout</Link><br/>
          </div>
      </header>
  );
}

export default Header;