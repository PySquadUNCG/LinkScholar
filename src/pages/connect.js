import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

const ConnectPage = () => {
    return (
        <>
            <Head>
                <title>Connect</title>
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
                    rel='stylesheet'
                />
               <meta name = "viewport" content="height=device-height, initial-scale=1.0"/>
            </Head>

            <div className='json'>
                <body>
                <header id='header'>
                   <Link href='/profile' className='header_link'>
                        Profile
                    </Link>
                    <Link href='/connect' className='header_link'>
                        Connect
                    </Link>
                    <img class = 'logo' src="/LinkScholar.png" alt="My Image" />
                   <Link href='/settings'className='header_link'>
                        Settings
                    </Link>
                    <Link href='/login' class_name = 'header_link' id='signout'>
                        Sign Out
                    </Link>
                </header>

                <h1 id='heading'>Select Field(s) of Study</h1>
                <br />
                <br />
                <div className='lone_display_group'>
                  

                    <br />
                    <label></label>
                    <br />
                    <form>
                        <label className='connect_label'>
                            Cyber-security
                            <input className ='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Information Retrieval
                            <input className = 'connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Computer Vision
                            <input className = 'connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Data Structures
                            <input className= 'connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Differential Privacy
                            <input className= 'connect_checkbox' type='checkbox' />
                        </label>
                        <label className= 'connect_label'>
                            Databases
                            <input className = 'connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Algorithms
                            <input className = 'connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Virtual Reality
                            <input className='connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            
                            Image Processing
                            <input className ='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Big Data Privacy and Security
                            <input className ='connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Artificial Intelligence
                            <input className='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Augmented Reality
                            <input className = 'connect_checkbox' type='checkbox' />
                        </label>
                    
                        <label className='connect_label'>
                            Information Retrieval
                            <input className='connect_checkbox'type='checkbox' />
                        </label>
                        <label className = 'connect_label'>
                            Machine learning
                            <input className='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Natural Language Processing
                            <input className='connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Human Computer Interaction
                            <input className ='connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Cryptography
                            <input className='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Stochastic Optimization
                            <input className='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Graph Convolutional Network and Federated Learning
                            <input className='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Data Mining
                            <input className='connect_checkbox' type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Network Security
                            <input className='connect_checkbox'type='checkbox' />
                        </label>
                        <label className='connect_label'>
                            Computer Security
                            <input className ='connect_checkbox' type='checkbox' />
                        </label>


                        <button>Connect</button>
                        <br />
                        <br />
                        <br />
                        <br />
                    </form>
                </div>
               <Link href='/homepage'>
                    <button id='to_home'>Back </button>
                </Link>
                <footer id='footer'>
                   <Link href='/about' className='footer_link'>
                        About |
                    </Link>
                    <Link href='/support' className='footer_link'>
                        Support |
                    </Link>
                   <Link href='/forgotusrname' className='footer_link'>
                        Forgot Username/Password
                    </Link>
                </footer>
                </body>
            </div>
        </>
    );
};

export default ConnectPage;