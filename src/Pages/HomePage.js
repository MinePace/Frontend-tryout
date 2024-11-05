import React from 'react';
import MyButton from '../Button';

function HomePage({ user }) {
  return (
    <div>
      <h1>Welcome to the Home Page, {user.firstname} {user.lastname}!</h1>
      <a href="shows">Go to shows page</a>
    </div>
  );
}

export default HomePage;
