import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
import Image from "next/image";

const SupportPage = () => {


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
                    <header id="header">
                        <Link href="/profile" className="header_link">Profile</Link>
                        <Link href="/connect" className="header_link">Connect</Link>
                        <img class = 'logo' src="/LinkScholar.png" alt="My Image" />
                        <Link href="/settings" className="header_link">Settings</Link>
                        <Link href = "/signin"  className="header_link" id="signout">Sign Out</Link>
                </header>

                <h1 id="heading">Support</h1>

                <Link href="/homepage"><button id="to_home">Back </button></Link>
                <footer id="footer">
                    <Link href="/about" className="footer_link">About | </Link>
                    <Link href="/support" className="footer_link">Support |</Link>
                    <Link href="/forgotusrname" className="footer_link">Forgot Username/Password</Link>

                </footer>
            </body>

        </div>
       
</>


    );
}


export default SupportPage;
