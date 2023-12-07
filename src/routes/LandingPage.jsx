import React, {useState} from 'react';
import '../styles/LandingPage.css'
import Login from "../components/LoginForm"
import SignUp from "../components/SignUpForm"

// Starting page

const LandingPage = ({setToken}) => {

    const[formType, setFormType] = useState('Login')

    function handleClick() {
        if(formType === 'Login') {
            setFormType('Signup')
        } else {
            setFormType('Login')
        }
    }

    return (
        <div className="LandingPage">
            <div className="box">
                <div>{formType}</div>
                {formType === "Login" ?
                    <Login setToken={setToken}/>
                    :
                    <SignUp/>
                }
                Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleClick}>{formType}</span>
            </div>
        </div>
    );
}

export default LandingPage;