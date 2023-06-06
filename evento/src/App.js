import './App.css';

function App() {

// Utilizar handle antes do nome do Evento
  function handleEvento() {
    return console.log('Olá');
  }
  function handleText() {
    return
  }

  return (
    <div className="App">

        <button onClick={handleEvento}>Clique</button>
        <button onClick={handleText}> Evento Text</button>
    </div>
  );
}

export default App;
