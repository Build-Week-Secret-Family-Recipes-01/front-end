import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
      <div>
          <h1>BloomTech Secret Recipes</h1>
          <div>
              <Link to="/">Login</Link><br/>
              <Link to="page_one">Page One</Link><br/>
              <Link to="page_two">Page Two</Link><br/>
              <Link to="logout">Logout</Link><br/>
          </div>
      </div>
  );
}

export default Header;