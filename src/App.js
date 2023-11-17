import './App.css';

function App() {
  const name = "Rhyan";
  const url = 'https://via.placeholder.com/150';

  function sum(a, b) {
    return a + b;
  }
  return (
    <div className="App">
      <h1>Olá, {name}</h1>
      <p>Soma: {sum(2, 5)}</p>
      <img src={url} alt='Minha Imagem' />
    </div>
  );
}

export default App;