import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import "../styles/LoginSignUpForms.css"

function SignUpForm() {

    // get location options from city / state tables
    const locationOptions = ["New York, NY", "Chicago, IL", "Boston, MA", "Philadephia, PA", "Los Angeles, CA", "Houston, TX", "San Francisco, CA", "Miami, FL"];

    const[signupFormData, setSignupFormData] = useState({
        firstname: '',
        lastname: '',
        username:'',
        email:'',
        password:'',
        location: '',
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
                  username: signupFormData.username,
                  firstname: signupFormData.firstname,
                  lastname: signupFormData.lastname,
                  location: signupFormData.location
                }
              }
            }
          )
          if(error) {
            console.log(error)
            alert(error)
          }
          else if(data) {
            // create a new row in users table
            console.log(data)
            alert("check email")
            
            // adding new record to Users Table
            const {user_data, error} = await supabase
              .from("Users")
              .insert([{user_id: data.user.id, username: data.user.user_metadata.username, password: '123456', firstname: data.user.user_metadata.firstname, lastname: data.user.user_metadata.lastname, email: data.user.email, city_id: 1}]) // city id is hard coded so not accurate
            if(user_data) { // might need to add .select to get data
              console.log(user_data)
            }
            if(error) {
              console.log(error)
              // let user know
            }
          }
    }

    return (
        <div className='wrapper-div'>
            <form className='form' onSubmit={handleSubmit}>

                <label className='login-signup-label'>First Name</label>
                <input className="login-signup-input" placeholder="first name" name="firstname" onChange={handleChange} required></input>
                <label className='login-signup-label'>Last Name</label>
                <input className="login-signup-input" placeholder="last name" name="lastname" onChange={handleChange} required></input>

                <label className='login-signup-label'>Username</label>
                <input className="login-signup-input" placeholder="username" name="username" onChange={handleChange} required></input>
                <label className='login-signup-label'>Email</label>
                <input className="login-signup-input" placeholder="email" name="email" onChange={handleChange} required></input>
                <label className='login-signup-label'>Password</label>
                <input className="login-signup-input" type="password" placeholder="password" name="password" onChange={handleChange} required></input>

                <label className='login-signup-label'>Location</label>
                    <select className='login-signup-select' name='location' value={signupFormData.location} onChange={handleChange} required>
                        <option value=''>--Select--</option>
                        {locationOptions.map((item, index) => 
                            <option key={index} value={item}>{item}</option>  
                        )}
                    </select>

                <button className="login-signup-button" type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignUpForm;