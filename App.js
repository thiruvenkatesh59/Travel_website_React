import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Home from'./components/Home';
import Package from './components/Package';
import Booking from './components/Booking';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/booking" element={<Booking/>}/>
          {/* Define nested routes within the Layout component */}
          <Route path="/login" element={<Login />} />
          {/* Add more nested routes if needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
