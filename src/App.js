import logo from './logo.svg';
import './App.css';

function App() {
  const mensaje = <h1>¡Hola Universo!</h1>;

  return ( // Devuelve un elemento escrito en jsx
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>  Los comentarios se introducen entre llaves
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="crimson">Hola Mundo</p>
        {mensaje}
      </header>
    </div>
  );
}

export default App;
