import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import styled from "styled-components";
import { Avatar, Box } from "@chakra-ui/react";
import Image from "next/image";
import Feed from "./componets/feed";
import MatchFeed from "./componets/matchfeed";
import { useRouter } from "next/router";
import LinkScholarAPI from "../backend/api/API";
import TopNav from "./componets/topnav";

const HomePage = () => {
  const router = useRouter();
  const { email, school_id } = router.query;
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const postsData = users.slice(0, 5).map((user) => ({
    authorFirstName: user.first_name,
    authorLastName: user.last_name,
    content: user.email,
  }));

  const getMatches = async () => {
    const { response, loaded } = await LinkScholarAPI(
      "/api/get/user/",
      "all",
      "GET"
    );
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
  };
  const goConnect = async () => {
    router.push({
      pathname: "/connect",
      query: { school_id: school_id, email: email },
    });
  };
  const [Avatar, setAvatar] = useState({
    img: "avatar.png",
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
      <div className="json">
        <TopNav email={email} school_id={school_id}></TopNav>
        <div className="home-boxes">
          <div className="heading2">Welcome {email}!</div>
          <div className="match-box">
            <MatchFeed email={email} school_id={school_id} />
          </div>
          <div className="feed-box">
            <Feed email={email}></Feed>
          </div>
        </div>

        <footer id="footer">
          <Link className="footer_link" href="/about">
            {" "}
            About |
          </Link>
          <Link className="footer_link" href="/support">
            {" "}
            Support |
          </Link>
          <Link className="footer_link" href="forgotusrname">
            {" "}
            Forgot Username/Password
          </Link>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
