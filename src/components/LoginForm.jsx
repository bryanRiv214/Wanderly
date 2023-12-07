import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'

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
          }
          else if(data) {
            console.log(data)
            alert("Logged in")
            setToken(data)
            navigate('../homepage')
          }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="email" name="email" onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
