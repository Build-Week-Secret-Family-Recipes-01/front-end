import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const { push } = useHistory();
    const baseURL = 'http://secret-family-recipes-01.herokuapp.com';

    const [creds, setCreds] = useState({
        user_id: Date.now() + Math.random(),
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
            .post(`${baseURL}/api/auth/register`, creds)
            .then((resp) => {
                setCreds(resp.data);
                push('/login');
            })
            .catch((err) => {
                console.log(err);
                setError({ errorMessage: 'INVALID USERNAME/PASSWORD' });
            });
    };

    return (
        <div className='top-of-page'>
            <div className='signup-page-container'>
                <h1>Create an account</h1>
                <h3>Enter your desired username and password below, then click Create Account</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        Username:
                        <input id='username' type='text' name='username' placeholder='Username' value={creds.username} onChange={handleChange} />
                        Password:
                        <input id='password' type='password' name='password' placeholder='Password' value={creds.password} onChange={handleChange} />
                        <p id='error'>{error.errorMessage}</p>
                        <button id='submit'>Create Account</button>
                    </form>
                    <p>
                        Already have an account? <Link to='/login'>Login here!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
