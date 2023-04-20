import MatchLayout from './matchlayout';
import MatchPost from './matchpost';
import LinkScholarAPI from '../../backend/api/API';
import React, { useEffect, useState } from "react";

const MatchFeed = ({ email, school_id }) => {
  const [users, setUsers] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const getPostsData = (users) => {
    if (!users) {
      return [];
    }

    return users.slice(0, 5).map((user) => ({
      authorFirstName: user.first_name,
      authorLastName: user.last_name,
      content: user.email
    }));
  };

  const postsData = getPostsData(users);

  const getMatches = async () => {
    const { response, loaded } = await LinkScholarAPI("/api/get/match/", "getUserMatch",{param: school_id}, "GET");
    if (Array.isArray(response)) {
      // Filter the response based on the search query
      const filteredUsers = response.filter((user) => {
        const fullName = `${user.first_name} ${user.last_name}`;
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return (
          fullName.toLowerCase().includes(lowerCaseSearchQuery) ||
          user.email.toLowerCase().includes(lowerCaseSearchQuery)
        );
      });
      setUsers(filteredUsers);
    }
  };
  

  useEffect(() => {
    getMatches();
  }, []);

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
      {users && users.length > 0 ? (
        postsData.map((post, index) => (
          <MatchPost
            key={index}
            author={`${post.authorFirstName} ${post.authorLastName}`}
            content={post.content}
          />
        ))
      ) : (
        <p className='no-matches-yet'>No Matches Yet</p>
      )}
      <button className="match-refresh" onClick={getMatches}>
        refresh
      </button>
    </MatchLayout>
  );
};

export default MatchFeed;
