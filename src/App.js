import './App.css';
import HeaderMain from './utils/HeaderMain/HeaderMain';

function App() {
  const imgCenter = 'https://via.placeholder.com/154';

  return (
    <div className="App">
      <HeaderMain />
      <div className='bodyContent'>
        <div className='content'>
          <img src={imgCenter} alt={imgCenter} />
        </div>
      </div>
    </div>
  );
}

export default App;