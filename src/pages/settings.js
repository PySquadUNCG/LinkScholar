import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const SettingPage = () => {


    return (
        <>
<div>
   
<head>
    <title>Settings</title>
    <Link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
</head>

<body>
<header id = "header">
    <a href = "profile.js" class="header_link">Profile</a>
    <a href ="connect.js" class = "header_link">Connect</a>
    <div class="logo"><img src="/LinkScholar.png" alt="My Image" /></div>
    <a href = "settings.js" class="header_link">Settings</a>
    <a href = "index.js" class = "header_link" id = "signout">Sign Out</a>
</header>

<h1 id = "heading">Configure Settings</h1>

<a href = "index.js"><button id = "to_home">Back </button></a>
<footer id = "footer">
    <a href = "about.js" class = "footer_link">About |</a>
    <a href = "support.js" class="footer_link">Support |</a>
    <a href = "index.js" class="footer_link">Forgot Username/Password</a>

</footer>
</body>
</div>
</>


    );
}


export default SettingPage;





