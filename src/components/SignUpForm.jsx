import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import "../styles/LoginSignUpForms.css"

function SignUpForm() {

    const[signupFormData, setSignupFormData] = useState({
        username:'',
        email:'',
        password:''
    })

    function handleChange(e) {
        setSignupFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]:e.target.value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        const { data, error } = await supabase.auth.signUp(
            {
              email: signupFormData.email,
              password: signupFormData.password,
              options: {
                data: {
                  username: signupFormData.username
                }
              }
            }
          )
          if(error) {
            console.log(error)
          }
          else if(data) {
            console.log(data)
            alert("check email")
          }
    }

    return (
        <div className='wrapper-div'>
            <form className='form' onSubmit={handleSubmit}>
                <label className='login-signup-label'>Username</label>
                <input className="login-signup-input" placeholder="username" name="username" onChange={handleChange}></input>
                <label className='login-signup-label'>Email</label>
                <input className="login-signup-input" placeholder="email" name="email" onChange={handleChange}></input>
                <label className='login-signup-label'>Password</label>
                <input className="login-signup-input" type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <button className="login-signup-button" type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignUpForm;