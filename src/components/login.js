import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Login = () => {
    const { push } = useHistory();

    const [creds, setCreds] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState({
        errorMessage: '',
    });

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://secret-family-recipes-01.herokuapp.com/api/auth/login', creds)
            .then((resp) => {
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('user_id', resp.data.user.user_id);
                // push('/');
            })
            .catch((err) => {
                console.log(err);
                setError({ errorMessage: 'INVALID USERNAME/PASSWORD' });
            });
    };

    return (
        <div className='top-of-page'>
            <div className='signup-page-container'>
                <h1>Login</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        Username:
                        <input id='username' type='text' name='username' placeholder='Username' value={creds.username} onChange={handleChange} />
                        Password:
                        <input id='password' type='password' name='password' placeholder='Password' value={creds.password} onChange={handleChange} />
                        <button id='submit'>Login</button>
                    </form>
                    <p id='error'>{error.errorMessage}</p>
                </div>
                <p>
                    Don't have an account? <Link to='/signup'>Create one here!</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
