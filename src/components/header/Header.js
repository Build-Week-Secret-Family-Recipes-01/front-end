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
              <Link to="/">Home</Link>
              <Link to="login">Login</Link>
              <Link to="page_one">Page One</Link>
              <Link to="page_two">Page Two</Link>
              <Link to="logout">Logout</Link>
              <Link to='add'><div className='add-recipe'>Add Recipe</div></Link>
          </div>
      </header>
  );
}

export default Header;