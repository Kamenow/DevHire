import logo from './logo.svg';
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar.js';
import Login from './components/layout/auth/Login/Login.js';
import './App.css';

function App() {
const App = () => {
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
      </header>
    </div>
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
