import React from 'react';
//what will be displaying in match box
const MatchLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default MatchLayout;