import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import CustomerDetails from './components/CustomerDetails';
import NewAccountForm from './components/NewAccountForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome Page</Link>
            </li>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/customer-details">Get Customer Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<NewAccountForm />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;