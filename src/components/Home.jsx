import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Bank</h1>
      <p>What would you like to do?</p>
      <div>
        <Link to="/create-account">
          <button>Create a New Account</button>
        </Link>
        <Link to="/customer-details">
          <button>Get Customer Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
