// src/components/PrimaryLayout.js
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import LoginPage from './login';
import Template from './template';
import Header from './header';
import LeftMenu from './leftMenu';

const PrimaryLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email === 'wajahatquazi22@gmail.com') {
          setIsLoggedIn(true);
        }
      }, []);
  return (
    <Router>
        <div className='nooha-container'>

            {!isLoggedIn ? <div className='orange-bar'></div> : <>            <Header />          
            </>}
            <div className='page-container'>
                {isLoggedIn && <LeftMenu />}
            <Routes>
          <Route path="/" element={isLoggedIn ? <Template /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
            </div>
        
        </div>
         
    </Router>
  );
};

export default PrimaryLayout;
