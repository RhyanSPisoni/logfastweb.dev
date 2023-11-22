import './App.css';
import HeaderMain from './utils/HeaderMain/HeaderMain';

function App() {
  const imgCenter = 'https://via.placeholder.com/154';

  return (
    <div className="App">
      <HeaderMain />
      <div className='logo-center'>
        <img src={imgCenter} alt={imgCenter} />
      </div>
    </div>
  );
}

export default App;