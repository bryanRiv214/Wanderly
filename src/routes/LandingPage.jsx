import React from 'react';
import { useNavigate } from 'react-router-dom'

// Starting page

const LandingPage = () => {

    const navigate = useNavigate()

    function handleSignup () {
        navigate('/signup')
    }

    function handleLogin () {
        navigate('/login')
    }

    return (
        <div>
            <button onClick={handleSignup}>Signup</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LandingPage;