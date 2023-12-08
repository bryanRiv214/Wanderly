import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'
import "../styles/LoginSignUpForms.css"

function LoginForm({setToken}) {

    const navigate = useNavigate()

    const[loginFormData, setLoginFormData] = useState({
        email:'',
        password:''
    })

    function handleChange(e) {
        setLoginFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]:e.target.value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginFormData.email,
            password: loginFormData.password
        })

          if(error) {
            console.log(error)
            alert("Invalid Login")
          }
          else if(data) {
            console.log(data)
            alert("Logged in")
            setToken(data)
            navigate('../homepage')
          }
    }

    return (
        <div className='wrapper-div'>
            <form className='form' onSubmit={handleSubmit}>
                <label className='login-signup-label'>Email</label>
                <input className="login-signup-input" placeholder="email" name="email" onChange={handleChange}></input>
                <label className='login-signup-label'>Password</label>
                <input className="login-signup-input" type="password" placeholder="password" name="password" onChange={handleChange}></input> {/* patterm validation */}
                <button className="login-signup-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
