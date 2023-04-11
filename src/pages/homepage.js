import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head'
import axios from "axios";
import styled from 'styled-components';
import { Avatar, Box } from '@chakra-ui/react';
import Image from "next/image";
import Feed from "./componets/feed"
import MatchFeed from "./componets/matchfeed"
import { useRouter } from 'next/router';
import LinkScholarAPI from '../backend/api/API';

const HomePage = () => {
    const router = useRouter();
    const {email} = router.query;
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const postsData = users.slice(0, 5).map((user) => ({
        authorFirstName: user.first_name,
        authorLastName: user.last_name,
        content: user.email
    }));


    const getMatches = async () => {
        const { response, loaded } = await LinkScholarAPI("/api/get/user/", "all", "GET");
        if (response !== "") {
            // Filter the response based on the search query
            const filteredUsers = response.filter((user) => {
                const fullName = `${user.first_name} ${user.last_name}`;
                return (
                    fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setUsers(filteredUsers);
        }
    }
   
    const [Avatar, setAvatar] = useState({
       img: "avatar.png"
    
      });

      useEffect(() => {

        const Avatar = "";
        
    
    
      }, [Avatar]);
      

    return (
        <>
<Head>
   
    <title>Homepage</title>
    <Link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
</Head>
<div className='json'>

<div className='topnav2'>
    <Link className="header_link2" href = "/profile"> Profile</Link>
    <Link className="header_link2" href = "/connect"> Connect</Link>
    <img class = 'logo2' src="/LinkScholar.png" alt="My Image" />
    <Link className= 'student-avatar-link' href = "/profile"><img className = 'student-avatar' src={Avatar.img} alt="Avatar" /></Link>
    <Link className="header_link2" href = "/settings"> Settings</Link>
    <Link className="header_link2" href = "/login"> Sign Out</Link>
    <div className='search-container'>
    <input className='nav-search'
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder ="Search "></input>
                    
                    </div>
    <button className='nav-input-search' onClick={getMatches}>Search</button>
</div>
<div className='home-boxes'>
<div className = "heading2">Welcome {email}!</div>
<div className='match-box'>
    <MatchFeed email = {email}/>
  
   
</div>
<div className='feed-box'>
<Feed email = {email}></Feed>

</div>
</div>


<footer id = "footer">
    <Link className = "footer_link" href = "/about"> About |</Link>
    <Link className = "footer_link" href = "/support"> Support |</Link>
    <Link className = "footer_link" href = "forgotusrname"> Forgot Username/Password</Link>

</footer>

</div>
</>


    );
}


export default HomePage;



