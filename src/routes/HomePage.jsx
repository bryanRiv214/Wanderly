import React from 'react'
import { useNavigate } from 'react-router-dom';

function Homepage() {

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
