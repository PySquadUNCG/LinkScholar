import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const AboutPage = () => {


    return (
        <>
<div><Head>
    <title>About</title>
    <Link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
</Head>

<body>
    <header id = "topnav">
        <Link href = "/profile"> Profile</Link>
        <Link href ="/connect"> Connect</Link>
        <img class = 'logo' src="/LinkScholar.png" alt="My Image" />
        <Link href = "/settings"> Settings</Link>
        <Link href = "/login" > Sign Out</Link>
    </header>

    <h1 id = "heading">About</h1>

    
   <Link href = "/homepage"> <button id = "to_home">Back </button></Link>
    <footer id = "footer">
        <Link href = "/about"> <a className = "footer_link">About |</a></Link>
        <Link href = "/support"> <a className="footer_link">Support |</a></Link>
        <Link href = "/forgotusrname"> <a className="footer_link">Forgot Username/Password</a></Link>

    </footer>
</body></div>
</>


    );
}


export default AboutPage;


