import { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Alert, Box } from '@chakra-ui/react';
import { useColorMode, Button } from "@chakra-ui/react"

const SignInPage = () => {
  /*const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
      studentId: event.target.studentId.value,
      password: event.target.password.value,
      confpassword: event.target.confpassword
    }
    function checkPassword(form) {
      password1 = form.password.value;
      password2 = form.confpassword.value;

      if (password == '')
        alert("Please enter a Password")

      else if (confpassword == '')
        alert("Please enter Password in 'confirm password'")

      else if (password != confpassword) {
        alert("\n Passwords do not match: Please re-enter.");
        return false;
      }
      else {
        alert("Welcome to LinkScholar!")
        return true;
      }

    }
  }
  */
  function MyComponent() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <div>
        <h1>My Component</h1>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>
    )
  }
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }; 
 
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      studentId: undefined,
      password: undefined,
      confPassword: undefined,


  
      
    });
    const [formFilled, setFormFilled] = useState(false);
  
    
    
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    // Check if all form inputs have a value
    
    useEffect(() => {
      if(password==confPassword){
      const isFormFilled = Object.values(formData).every((value) => value !== '');
      setFormFilled(isFormFilled);
    }else{console.error('Passwords do not match: Try Again!')}
    }, [formData]);
    
  
  return (

    <>

      <div class="topnav">
        <a class="active">Sign Up</a>
        <Link href="/login">Login</Link>
      </div><Head>
        <title>LinkScholar-Sign up</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet" />
      </Head><body>

        <div class="signup-box">
          <h1>Welcome To LinkScholar!</h1>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" id='first' name = "firstName" value={formData.firstName} onChange = {handleInputChange} required />
            <label>Last Name</label>
            <input type="text" id='last' name = "lastName" value={formData.lastName} onChange = {handleInputChange} required />
            <label>Email</label>
            <input type="text" id='email' name="email" value={formData.email} onChange = {handleInputChange} required />
            <label>Student ID</label>
            <input type="number" id='studentId' value={formData.studentId} onChange = {handleInputChange} minLength={9} maxLength={9} required />
            <label>Password</label>
            <input type="password" id='password' pattern='{7,25}' value={formData.password} onChange = {handleInputChange} required />
            <label>Confirm Password</label>
            <input type="password" id='confpassword' pattern='{7,25}' value = {formData.confPassword} onChange={handleInputChange} placeholder='' required />
            {/*<label className='checkboxlabel'>  Is this a Teacher Account?<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /></label>*/}

            <Link href="/login">
              <button className= 'submit' type = "submit" disabled={!formFilled} > Login </button>
            </Link>

          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
          </p>
        </div>
        <p class="para-2">
          Already have an account? <Link href="/login">Sign Up</Link>
        </p>
      </body>

    </>

  )
}

export default SignInPage
