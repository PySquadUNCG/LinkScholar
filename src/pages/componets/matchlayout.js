import React from 'react';

const MatchLayout = ({ children }) => {
  return (
    <div>
      <header><input id = "matchcontent" className='match-input' placeholder='Search for Match' maxLength={100}></input> </header>
      <main>{children}</main>
    </div>
  );
};

export default MatchLayout;