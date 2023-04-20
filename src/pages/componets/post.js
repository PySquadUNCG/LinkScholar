import React from 'react';

const Post = ({ author, content, }) => {
  return (
    <div className='post-box'>
      <img className='post-image' src='avatar.png'></img><strong className='post-author'>{author}</strong>
      <p className='post-feed'>{content}</p>
      
    </div>
  );
};

export default Post;
