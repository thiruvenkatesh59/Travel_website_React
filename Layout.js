import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;