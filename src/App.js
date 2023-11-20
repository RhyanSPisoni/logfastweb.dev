import './App.css';

import HeaderMain from './utils/HeaderMain/HeaderMain'

function App() {
  const imgCenter = 'https://via.placeholder.com/1000x150';

  return (
    <div className="App">
      <HeaderMain />
      <div className='BodyCenter'>
        <p>Teste</p>
      </div>
    </div>
  );
}

export default App;