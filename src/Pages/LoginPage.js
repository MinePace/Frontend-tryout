import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
    // onLogin is received as a prop
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (firstname && lastname) {
        onLogin({firstname, lastname});  // Call the function passed via props
      } else {
        alert('Please enter both name and password');
      }

      navigate('/home')
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firtname">Firtname:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
export default LoginPage;