// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/movieList">Movie List</Link>
        </li>
        <li>
          <Link to="/companyInfo">Company Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;