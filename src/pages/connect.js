import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';
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

            <div>
                <header id='header'>
                    <a href='profile.js' className='header_link'>
                        Profile
                    </a>
                    <a href='connect.js' className='header_link'>
                        Connect
                    </a>
                    <div class="logo"><img src="/LinkScholar.png" alt="My Image" /></div>
                    <a href='settings.js' className='header_link'>
                        Settings
                    </a>
                    <a href='index.js' className='header_link' id='signout'>
                        Sign Out
                    </a>
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
                <a href='index.js'>
                    <button id='to_home'>Back </button>
                </a>
                <footer id='footer'>
                    <Link href='/about' className='footer_link'>
                        About |
                    </Link>
                    <Link href='/support' className='footer_link'>
                        Support |
                    </Link>
                    <Link href='/index' className='footer_link'>
                        Forgot Username/Password
                    </Link>
                </footer>
            </div>
        </>
    );
};

export default ConnectPage;