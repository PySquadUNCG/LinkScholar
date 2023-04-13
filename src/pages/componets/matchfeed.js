import MatchLayout from './matchlayout';
import MatchPost from './matchpost';
import LinkScholarAPI from '../../backend/api/API';
import React, { useEffect, useState } from "react";
//functionality of match box/ match feed
const MatchFeed = ({ email }) => {
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


    return (
        <MatchLayout>
            <h1 className="your-matches">Your Matches:</h1>
            <div className="search-container">
                <input
                    className='match-input'
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search by name or email"
                />
                <button className='match-input-search' onClick={getMatches}>Search</button>
            </div>
            {postsData.map((post, index) => (
                <MatchPost
                    key={index}
                    author={`${post.authorFirstName} ${post.authorLastName}`}
                    content={post.content}
                />
            ))}
            <button className="match-refresh" onClick={getMatches}>
                refresh
            </button>
        </MatchLayout>

    );
};

export default MatchFeed;
