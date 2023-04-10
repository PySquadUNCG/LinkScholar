import MatchLayout from './matchlayout';
import MatchPost from './matchpost';
import LinkScholarAPI from '../../backend/api/API';
import React, { useEffect, useState } from "react";
const MatchFeed = ({ email }) => {

    const [users, setUsers] = useState([]);

    const postsData = users.slice(0, 5).map((user) => ({
        authorFirstName: user.first_name,
        authorLastName: user.last_name,
        content: user.email
    }));

    const getMatches = async (event) => {

        const { response, loaded } = await LinkScholarAPI("/api/get/user/", "all", "GET");

        if (response !== '') {
            setUsers(response);
        }
    }

    return (
        <MatchLayout>
            <h1 className='your-matches'>Your Matches:</h1>
            {postsData.map((post, index) => (
                <MatchPost key={index} author={`${post.authorFirstName} ${post.authorLastName}`} content={post.content} />
            ))}
            <button className='match-refresh' onClick={getMatches}> refresh </button>
        </MatchLayout>
    );
};

export default MatchFeed;
