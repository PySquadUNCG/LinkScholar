import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const AboutPage = () => {


    return (
        <>
<div><head>
    <title>About</title>
    <Link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
</head>

<body>
    <header id = "header">
        <Link href = "/profile" class="header_link">Profile</Link>
        <Link href ="/connect" class = "header_link">Connect</Link>
        <div class="logo"><img src="/LinkScholar.png" alt="My Image" /></div>
        <Link href = "/settings" class="header_link">Settings</Link>
        <Link href = "/index" class = "header_link" id = "signout">Sign Out</Link>
    </header>

    <h1 id = "heading">About</h1>

    
    <Link href = "/index"><button id = "to_home">Back </button></Link>
    <footer id = "footer">
        <Link href = "/about" class = "footer_link">About |</Link>
        <Link href = "/support" class="footer_link">Support |</Link>
        <Link href = "/index" class="footer_link">Forgot Username/Password</Link>

    </footer>
</body></div>
</>


    );
}


export default AboutPage;


