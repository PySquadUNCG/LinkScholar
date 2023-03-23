import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const ProfilePage = () => {


    return (
        <>
<div>
   
<head>
   
    <title>Profile</title>
    <Link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
</head>

<body>
<header id = "header">
    <Link href = "/profile" class="header_link">Profile</Link>
    <Link href ="/connect" class = "header_link">Connect</Link>
    <img class = "logo" src="/LinkScholar.png" alt="My Image" />
    <Link href = "/settings" class="header_link">Settings</Link>
    <Link href = "/index" class = "header_link" id = "signout">Sign Out</Link>
</header>

<h1 id = "heading">Profile</h1>


<div class  = "lone_display_group">
<h2>Display Name</h2>
    <p>First Last</p>
<h2>Institution</h2>
    <p>Institution(s)</p>
<h2>Interest Areas</h2>
    <p>Interest, Interest, ...</p>
<h2>Status</h2>
    <p>Assigned / Searching / ....</p>
</div>
<a href = "index.js"><button id = "to_home">Back </button></a>
<footer id = "footer">
    <Link href = "/about" class = "footer_link">About |</Link>
    <Link href = "/support" class="footer_link">Support |</Link>
    <Link href = "/index" class="footer_link">Forgot Username/Password</Link>

</footer>
</body>
</div>
</>


    );
}


export default ProfilePage;




