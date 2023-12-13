import React, {useState} from 'react';
import '../styles/LandingPage.css'
import Login from "../components/LoginForm"
import SignUp from "../components/SignUpForm"

// Starting page

const LandingPage = ({setToken}) => {

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

    return (
        <div className="LandingPage">
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
                
            </div>
        </div>
    );
}

export default LandingPage;