import React, { useEffect,useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const LogInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });
  const [formFilled, setFormFilled] = useState(false);




  const handleInputChangelog = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
   
      console.log('Form submitted:', formData);
      event.preventDefault();
  
  };



 // Check if all form inputs have a value
  useEffect(() => {
 
      const isFormFilled = Object.values(formData).every((value) => value !== '');
      setFormFilled(isFormFilled);
   
     
  }, [formData]);
  

  return (

    <><Head>
    <title>Linkscholar-Login</title>
    <Link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
  </Head><div class="topnav">
    <a class="active" >Login</a>
    <Link href="/signin">Sign Up</Link>
  </div>
  
  <body className ='jb'>
    <div class="login-box">
      <div class = "icon"><img src="/LinkScholar.png" alt="My Image" />
</div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" id = "email" name = "email" value = {formData.email} onChange={handleInputChangelog}  required />

        <label>Password</label>
        <input type="password" id = "password" name = "password" value={formData.password} onChange={handleInputChangelog} required  />
        <Link href="/homepage">
        <button className='submit' type="submit" disabled={!formFilled} > Login </button>
            </Link>

      </form>
      <Link href="/signin"><a className = "indent">Need An Account? Sign Up Here</a></Link><br></br>
      <Link href="/forgotusrname">
        <a className = "indent">Forgot username or password?</a>
      </Link>
    </div>
    
  </body></>

  )
}

export default LogInPage