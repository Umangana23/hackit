// Login.js
import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');

  const handleLogin = () => {
    console.log('Logging in with username:', username);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="input-field">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-field">
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="user">User</option>
          <option value="donator">Donator</option>
        </select>
      </div>
      <button className="btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;