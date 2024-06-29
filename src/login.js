// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Vector from './Vector.png';
import { Image, InputGroup, Form, Alert, Button } from 'react-bootstrap';
const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleLogin = () => {
    if (email === 'wajahatquazi22@gmail.com' && password === '1234') {
      localStorage.setItem('email', email);
      setIsLoggedIn(true);
      navigate('/');
    } else {
      setError(true);
    }
  };

  return (
    <div className='login-page-container'>
    <div className='login-container'>
        <div className='login-box'>
            <Image src={Vector} />
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fas fa-user" /></InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">
        <i class="fa-solid fa-lock"></i>
        </InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </InputGroup>
      { error && <Alert key="danger" variant="danger">
          Invalid credentials. Please try again
        </Alert>}
        <Button variant="primary" className='login-button' id="button-addon2" onClick={handleLogin}>Sign In</Button>
        <span className='forgot'>Forgot Password ?</span>
        <div className='social-icons'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-twitter"></i>
        </div>
        <span className='footer'>© Copyright Dyaz Innovate 2023. All rights reserved.</span>
        </div>
    </div>
    </div>

  );
};

export default LoginPage;
