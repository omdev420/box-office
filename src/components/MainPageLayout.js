import React from 'react';
import Nav from './Nav';
import Title from './Title';

export const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a Movie or an Actor?"
      />
      <Nav />
      {children}
    </div>
  );
};
