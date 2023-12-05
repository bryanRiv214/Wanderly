import React from 'react'
import { useNavigate } from 'react-router-dom';

// Starting page

const Homepage = ({userName, location}) => {
  return (
    <div className="Homepage">
      <h1 className="good-morning-msg">Good Morning, {userName}</h1>

      <SearchBar />

      <h2>What can you do today?</h2>
      
    const navigate = useNavigate()

    function handleLogout() {
        sessionStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <div>
            Homepage
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Homepage;
