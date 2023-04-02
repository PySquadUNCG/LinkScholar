import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import axios from "axios";
import styled from 'styled-components';
import { Alert, Box } from '@chakra-ui/react';
import { useColorMode, Button,FormErrorMessage } from "@chakra-ui/react"
import LinkScholarAPI from './api/hello';
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
     /* const { response, loaded } = LinkScholarAPI("/api/get/user/", "email", { param: "d_loy@uncg.edu" });
      const form = event.target;
      const data = new FormData(form);
      const obj = {};
      data.forEach((value,key) => {
        obj[key] = value;
      });
      setFormData(obj);*/
      fetch('/src/backend/api/API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      alert("Your form has been submitted successfully!");
    } else {
      console.error('Passwords do not match: Try Again!'); 
      
    }
  };

  /*const postData = () => {
    fetch('/src/backend/api/API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }*/

  // Check if all form inputs have a value

  useEffect(() => {
    if (formData.password === formData.confPassword && formData.studentId.length === 9 ) {
      const isFormFilled = Object.values(formData).every((value) => value !== '');
      setFormFilled(isFormFilled);
    } else { 
      console.error('Passwords do not match: Try Again!') }
  }, [formData]);


  return (

    <>
      <div className='jb'>
      <div class="topnav">
        <a class="active">Sign Up</a>
        <Link href="/login">Login</Link>
      </div><Head>
        <title>LinkScholar-Sign up</title>
        <Link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet" />
      </Head><body>

        <div class="signup-box">
          <h1>Welcome To </h1>
          <div class = "icon"><img src="/LinkScholar.png" alt="My Image" /></div>
          <h2>Sign up</h2>
      
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" id='first' name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            <label>Last Name</label>
            <input type="text" id='last' name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            <label>Email</label>
            <input type="text" id='email' name="email" value={formData.email} onChange={handleInputChange} required />
            <label>Student ID</label>
            <input type="number" id='studentId' name="studentId" value={formData.studentId} onChange={handleInputChange} minLength= {9} maxLength={9} required />
            <label>Password</label>
            <input type="password" id='password' name="password" value={formData.password} onChange={handleInputChange} required />
            <label>Confirm Password</label>
            <input type="password" id='confpassword' name="confPassword" value={formData.confPassword} onChange={handleInputChange} required />
            {/*<label className='checkboxlabel'>  Is this a Teacher Account?<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /></label>*/}

            <Link href="/login">
              <button /*onClick={postData}*/ className='submit' type="submit" disabled={!formFilled} > Sign Up </button>
            </Link>

          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
          </p><p class="para-2">
         <a>Already have an account? <Link href="/login">Login</Link></a> 
        </p>
        </div>
        
      </body>
</div>
    </>

  )
}

export default SignInPage