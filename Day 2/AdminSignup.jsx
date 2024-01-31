import React, { useState } from 'react';
import './AdminSignup.css'; // Import the CSS file

const AdminSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic for user
    console.log('Admin signup:', { name, email, password });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Admin Signup</h2>
      <form className="signup-form">
        <label className="signup-label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <label className="signup-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <label className="signup-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button type="button" onClick={handleSignup} className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default AdminSignup;

