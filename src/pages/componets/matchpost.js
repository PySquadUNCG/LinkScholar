import React from 'react';

const Match = ({ author, content,}) => {
  //send request to match from student to proffesor
    const sendRequest = async () => {
      return("");
    };

  return (
    <div className='match-post-box'>
      <img className='match-image' src='avatar.png'></img><strong className='match-author'>{author}</strong>
      <p className='post-feed'>{content}</p>
      {/*<button onClick={sendRequest} className='request-tojoin-match'>Request to Join Research</button>*/}
    </div>
  );
};

export default Match;
