import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Signup = () => {
  const {push} = useHistory();
  const baseURL = "http://secret-family-recipes-01.herokuapp.com";

  const [creds, setCreds] = useState({
      user_id: Date.now() + Math.random() ,
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
      .post(`${baseURL}/api/auth/register`, creds)
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
    <div className='signup-page-container'>
      <h1>Create a new account below</h1>
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
  )
}

export default Signup;