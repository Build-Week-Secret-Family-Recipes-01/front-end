import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return(
    <div>
          <h1>
              Pleasse login or create a new account!!!!!!
          </h1>
          <Link to="/signup">Don't have an account?</Link><br/>
    </div>
  )
}

export default Login;