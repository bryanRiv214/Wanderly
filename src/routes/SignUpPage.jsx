import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import { Link } from 'react-router-dom'

function SignUpPage() {

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
        <div>
            Signup
            <form onSubmit={handleSubmit}>
                <input placeholder="username" name="username" onChange={handleChange}></input>
                <input placeholder="email" name="email" onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
            Already have an account? <Link to="/login">Login</Link>
        </div>
    );
}

export default SignUpPage;