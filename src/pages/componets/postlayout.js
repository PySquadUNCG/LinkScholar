import React from 'react';

const PostLayout = ({ children }) => {
  

  
  return (
    <div>
      <header><input className='feed-input' placeholder='What do you want to share with the world today?...' maxLength={140}></input><button className='post-share-button' type='submit'>Share</button>
      </header>
      <main>{children}</main>
    
    </div>
  );
};

export default PostLayout;