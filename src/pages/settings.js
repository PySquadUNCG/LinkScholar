import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const SettingPage = () => {


    return (
        <>

   
<Head>
    <title>Settings</title>
    <Link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
</Head>
<div className='json'>
<body >
<header id = "header">
   <Link href = "/profile"> <a className="header_link">Profile</a></Link>
   <Link href = "/connect"> <a className = "header_link">Connect</a></Link>
   <img class = 'logo' src="/LinkScholar.png" alt="My Image" />
   <Link href = "/settings"> <a className="header_link">Settings</a></Link>
   <Link href = "/login"> <a className = "header_link" id = "signout">Sign Out</a></Link>
</header>

<h1 id = "heading">Configure Settings</h1>

<Link href = "/homepage"><button id = "to_home">Back </button></Link>
<footer id = "footer">
    <Link href = "/about"> <a className = "footer_link">About |</a></Link>
    <Link href = "/support"> <a className="footer_link">Support |</a></Link>
    <Link href = "/forgotusrname"> <a className="footer_link">Forgot Username/Password</a></Link>

</footer>
</body>
</div>
</>


    );
}


export default SettingPage;





