import React from 'react';
import imgLogo from './img/logo.png'
import './App.css';
import HeaderMain from './utils/HeaderMain/HeaderMain';
import HomePage from './utils/HomePage/HomePage'

const imgCenter = 'https://via.placeholder.com/154';
function App() {
  return (
    <>
      <HeaderMain />
      <div className='bodyContent'>
        <div className='content'>
          <img src={imgLogo} alt={imgCenter} />
        </div>
        <HomePage />
      </div>
    </>
  );
}

export default App;