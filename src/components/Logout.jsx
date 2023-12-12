import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  let navigate = useNavigate();

  function handleLogout () {
    sessionStorage.removeItem('token');
    navigate('');
    window.location.reload(false);
  }

  return (
      <button className="logout-btn" onClick={handleLogout}>Log out</button>
  );
}

export default Logout;