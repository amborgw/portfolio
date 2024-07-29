import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';

function App() {
  const style = {
    backgroundColor: '#000000',
    height: '100vh'
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div style={style}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
