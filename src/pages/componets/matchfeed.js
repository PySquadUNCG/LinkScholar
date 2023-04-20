import MatchLayout from './matchlayout';
import MatchPost from './matchpost';
import LinkScholarAPI from '../../backend/api/API';
import React, { useEffect, useState } from "react";

const MatchFeed = ({ email, school_id }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const getMatches = async () => {
    const { response: schoolIds, loaded } = await LinkScholarAPI("/api/get/match/", "getUserMatch", { param: school_id }, "GET");

    if (Array.isArray(schoolIds)) {
      const users = [];

      for (const id of schoolIds) {
        const { response, loaded } = await LinkScholarAPI("/api/get/user/", "schoolID", { param: id }, "GET");
        console.log("response:",response[0]);
        if (response) {
          const formattedUser = {
            first_name: response[0].first_name,
            last_name: response[0].last_name,
            email: response[0].email
          };
          console.log("formattedUser:", formattedUser);
          users.push(formattedUser);

          if (users.length === 5) {
            break;
          }
        }
      }
      console.log("returned matches: ", users);

      // Filter the response based on the search query
      const filteredUsers = users.filter((user) => {
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
    {users.length > 0 ? (
      users.map(({ first_name, last_name, email }, index) => (
        <MatchPost
          key={index}
          author={`${first_name} ${last_name}`}
          content={email}
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
