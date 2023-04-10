import React from 'react';

const Match = ({ author, content,}) => {
  return (
    <div className='match-post-box'>
      <img className='match-image' src='avatar.png'></img><strong className='match-author'>{author}</strong>
      <p className='post-feed'>{content}</p>
      
    </div>
  );
};

export default Match;
