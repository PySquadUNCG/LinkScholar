import React, { useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const LogInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

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
  
  <body>
    <div class="login-box">
      <div class = "icon"><img src="/LinkScholar.png" alt="My Image" />
</div>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <Link href="/homepage">
            <a className='submit'>Login</a>
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