import React from 'react';
import imgLogo from './img/logo.png'
import './App.css';
import HeaderMain from './utils/HeaderMain/HeaderMain';
import HomePage from './utils/HomePage/HomePage'

const imgCenter = 'https://via.placeholder.com/154';
function App() {
  return (
    <div className='App'>
      <HeaderMain />
      <div class='main'>
        <div className='content'>
          <img src={imgLogo} alt={imgCenter} />
        </div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;