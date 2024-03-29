import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AUTH_ENDPOINT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, RESPONSE_TYPE} from '../src/constants.js';
import Bracket from './components/bracket/Bracket.js';
import { MusicProvider } from './context/MusicContext.js';
import Login from './pages/login.js';
import Home from './pages/home.js';
import Header from './components/header/Header.js';

function App() {
  useEffect(()=>{
    document.title = 'Music Madness';
  });
  return (
    <div className="App">
      {/* <MusicProvider>
        <Login/>
      </MusicProvider> */}
      
      <Router>
        <MusicProvider>
          <Header/>
          <Routes>
            <Route path="/" exact element={<Login />} />
            {/* <Route path = '/home' exact element ={<Home/>}/>
            <Route path = '/bracket' exact element ={<Bracket />}/>   */}
          </Routes>
        </MusicProvider>
      </Router>
    </div>
  );
}

export default App;