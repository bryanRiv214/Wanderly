import React, {useState} from 'react';
import '../styles/LandingPage.css'
import Login from "../components/LoginForm"
import SignUp from "../components/SignUpForm"
import { useNavigate } from 'react-router-dom'

// Starting page

const LandingPage = ({setToken}) => {

    const navigate = useNavigate()

    const[formType, setFormType] = useState('Login')
    const[otherFormType, setOtherFormType] = useState('Signup')

    function handleClick() {
        if(formType === 'Login') {
            setFormType('Signup')
            setOtherFormType('Login')
        } else {
            setFormType('Login')
            setOtherFormType('Signup')
        }
    }

    function handleGuest() {
        navigate('../homepage')
    }

    return (
        <div className="LandingPage">
            <div className='wanderly'>
                <img className='logo' src='logo.svg' alt="wanderly logo"></img>
                <h2 className='wanderly-title'>Wanderly</h2>
            </div>
            <div className="box">
                <div className="formType">{formType}</div>
                {formType === "Login" ?
                    <div className='form-container'>
                        <Login setToken={setToken}/>

                        <div className="change-form-message">
                            Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleClick}>{otherFormType}</span>
                        </div>
                    </div>
                    :
                    <div className='form-container'>
                        <SignUp/>

                        <div className="change-form-message">
                            Have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleClick}>{otherFormType}</span>
                        </div>
                    </div>
                }
                <div className="guest-message">
                    <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleGuest}>Join as Guest</span>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;