import { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Alert, Box } from '@chakra-ui/react';
import { useColorMode, Button } from "@chakra-ui/react"

const SignInPage = () => {

  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    password: '',
    confPassword: '',




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
   

    if (formData.password === formData.confPassword) {
      console.log('Form submitted:', formData);
      event.preventDefault();
      setSuccessMessage('Your form has been submitted successfully!');
    } else {
      console.error('Passwords do not match: Try Again!'); 
      
    }
  };

  // Check if all form inputs have a value

  useEffect(() => {
    if (formData.password === formData.confPassword) {
      const isFormFilled = Object.values(formData).every((value) => value !== '');
      setFormFilled(isFormFilled);
    } else { 
      console.error('Passwords do not match: Try Again!') }
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
            <input type="text" id='first' name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            <label>Last Name</label>
            <input type="text" id='last' name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            <label>Email</label>
            <input type="text" id='email' name="email" value={formData.email} onChange={handleInputChange} required />
            <label>Student ID</label>
            <input type="number" id='studentId' name="studentId" value={formData.studentId} onChange={handleInputChange} minLength={9} maxLength={9} required />
            <label>Password</label>
            <input type="password" id='password' name="password" pattern='{7,25}' value={formData.password} onChange={handleInputChange} required />
            <label>Confirm Password</label>
            <input type="password" id='confpassword' name="confPassword" pattern='{7,25}' value={formData.confPassword} onChange={handleInputChange} required />
            {/*<label className='checkboxlabel'>  Is this a Teacher Account?<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /></label>*/}

            <Link href="/login">
              <button className='submit' type="submit" disabled={!formFilled} > Sign Up </button>
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
