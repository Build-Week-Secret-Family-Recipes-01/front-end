import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


const Login = () => {
  const {push} = useHistory();

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
        axios.post("https://secret-family-recipes-01.herokuapp.com/api/auth/login", creds)
            .then(resp =>{
                console.log(resp.data);
                localStorage.setItem('token', resp.data.token)
                push('/');
            })
            .catch(err=>{
                console.log(err);
                setError({errorMessage: 'YOU GUESSED WRONG'});
            })
    }


  return(
    <div>
          <h2>Please enter your account information.</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    Username:
                    <input
                        id='username'
                        type="text"
                        name="username"
                        value={creds.username}
                        onChange={handleChange}
                    />
                    <br/>
                    Password:
                    <input
                        id='password'
                        type="password"
                        name="password"
                        value={creds.password}
                        onChange={handleChange}
                    />
                    <br/>
                <button id='submit'>Submit</button>
                </form>
                <p id='error'>{error.errorMessage}</p>
            </div>
            <p>Don't have an account?</p>
          <Link to="/signup">Create one here!</Link><br/>
    </div>
  )
}

export default Login;