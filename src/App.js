import imgLogo from './img/logo.png'
import './App.css';
import HeaderMain from './utils/HeaderMain/HeaderMain';
import HomePage from './utils/HomePage/HomePage'

const imgCenter = 'https://via.placeholder.com/154';
function App() {
  return (
    // <Router>
    <>
      <HeaderMain />
      <div className='bodyContent'>
        <div className='content'>
          <img src={imgLogo} alt={imgCenter} />
        </div>
        <HomePage />
      </div>
    </>

    // </Router>

  );
}

export default App;