import React, {useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const {push} = useHistory();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.get('https://secret-family-recipes-01.herokuapp.com/api/auth/logout',{
            headers: {
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem('token');
            push('/');

        })
        .catch(err=>{
            console.log(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])       
    return(<div></div>);
}

export default Logout;