import React, {useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const {push} = useHistory();
            localStorage.removeItem('token');
            push('/');

        
    // eslint-disable-next-line react-hooks/exhaustive-deps      
    return(<div></div>);
}

export default Logout;