import logo from './logo.svg';
import './App.css';
import {Link, Route,Routes} from "react-router-dom"
import MoviesPage from './components/page/MoviesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="movies">Movies</Link>
        <Routes><Route path='/movies' component={MoviesPage}></Route></Routes>
      </header>
    </div>
  );
}

export default App;
