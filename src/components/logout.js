import React, {useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const {push} = useHistory();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.post('','*',{
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
    },[])       
    return(<div></div>);
}

export default Logout;