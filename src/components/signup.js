import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Signup = () => {
  const {push} = useHistory();
  const baseURL = "https://secret-family-recipes-01.herokuapp.com/api/auth/login";

  const [creds, setCreds] = useState({
      username: '',
      password: ''
  })

  const [error, setError] = useState({
    errorMessage: ''
  });

  const handleChange = (e) => {
    setCreds({
        ...creds,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/user`, creds)
      .then(resp =>{
        setCreds(resp.data);
        push('/login');
      })
      .catch(err=>{
          console.log(err);
          setError({errorMessage: 'INVALID USERNAME/PASSWORD'});
      })
  }


  return(
    <div className='top-of-page'>
      <div className='signup-page-container'>
        <h1>Create a new account</h1>
        <h3>Enter your desired username and password below, then click Submit</h3>
        <div>
          <form onSubmit={handleSubmit}>
            Username:
              <input
                id='username'
                type='text'
                name='username'
                placeholder='Username'
                value={creds.username}
                onChange={handleChange}
              />
            <br/>
            Password:
              <input
                  id='password'
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={creds.password}
                  onChange={handleChange}
              />
              <br/>
          <button id='submit'>Submit</button>
          </form>
          <p id='error'>{error.errorMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Signup;