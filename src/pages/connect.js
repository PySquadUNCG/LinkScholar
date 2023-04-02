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
            </Head>

            <div className='json'>
                <body>
                <header id='header'>
                   <Link href='/profile'> <a  className='header_link'>
                        Profile
                    </a></Link>
                    <Link href='/connect'><a className='header_link'>
                        Connect
                    </a></Link>
                    <img class = 'logo' src="/LinkScholar.png" alt="My Image" />
                   <Link href='/settings'> <a className='header_link'>
                        Settings
                    </a></Link>
                    <Link href='/login'><a className='header_link' id='signout'>
                        Sign Out
                    </a></Link>
                </header>

                <h1 id='heading'>Connect</h1>
                <div className='lone_display_group'>
                    <label>Select An Interest Area</label>
                    <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>

                    <br />
                    <label>Select Parameter(s)</label>
                    <br />
                    <form>
                        <label>
                            Parameter 1
                            <input type='checkbox' />
                        </label>
                        <label>
                            Parameter 2
                            <input type='checkbox' />
                        </label>
                        <label>
                            Parameter 3
                            <input type='checkbox' />
                        </label>
                        <br />
                        <label>
                            Parameter 4
                            <input type='checkbox' />
                        </label>
                        <br />

                        <button>Submit</button>
                    </form>
                </div>
               <Link href='/homepage'>
                    <button id='to_home'>Back </button>
                </Link>
                <footer id='footer'>
                   <Link href='/about'> <a className='footer_link'>
                        About |
                    </a></Link>
                    <Link href='/support' ><a className='footer_link'>
                        Support |
                    </a></Link>
                   <Link href='/forgotusrname'> <a className='footer_link'>
                        Forgot Username/Password
                    </a></Link>
                </footer>
                </body>
            </div>
        </>
    );
};

export default ConnectPage;