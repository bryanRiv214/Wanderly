import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({setToken}) => {

  let navigate = useNavigate();

  function handleLogout () {
    sessionStorage.removeItem('token');
    setToken(false)
    navigate('/');
  }

  return (
    <div className='Homepage'>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;