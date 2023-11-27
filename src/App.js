import imgLogo from './img/logo.png'
import './App.css';
import HeaderMain from './utils/HeaderMain/HeaderMain';
import HomePage from './utils/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const imgCenter = 'https://via.placeholder.com/154';

function App() {
  return (
    <Router>
      <HeaderMain />
      <div className='bodyContent'>
        <div className='content'>
          <img src={imgLogo} alt={imgCenter} />
        </div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>

    </Router>

  );
}

export default App;