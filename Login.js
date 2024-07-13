import React, { useState } from 'react';
import axios from 'axios';
import '../style.css'
import '../login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        username,
        password
      });
      console.log(response.data); // Handle login success
    } catch (error) {
      console.error('Login failed', error); // Handle login failure
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        username,
        password,
        email
      });
      console.log(response.data); // Handle signup success
      setSignupSuccess(true); // Set signup success state to true
    } catch (error) {
      console.error('Sign up failed', error); // Handle signup failure
    }
  };

  // Redirect to login after signup success
  if (signupSuccess) {
    setIsLogin(true); // Switch to login form
    setSignupSuccess(false); // Reset signup success state
  }

  return (
    <section className="login" id="login">
      <div className="login-container">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter your username" required
                  value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" required
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="signup-link">
              Don't have an account?{' '}
              <button onClick={handleFormSwitch} className="link-button">
                Sign up
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <label htmlFor="newUsername">Username:</label>
                <input type="text" id="newUsername" placeholder="Enter your username" required
                  value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">Password:</label>
                <input type="password" id="newPassword" placeholder="Enter your password" required
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" required
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <div className="signup-link">
              Already have an account?{' '}
              <button onClick={handleFormSwitch} className="link-button">
                Login
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Login;

