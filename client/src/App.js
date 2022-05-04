import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar.js';
import Landing from './components/layout/Landing/Landing.js';
import Login from './components/layout/auth/Login/Login.js';
import Register from './components/layout/auth/Register/Register.js';
import AlertDisplay from './components/layout/Alert/AlertDisplay.js';
// Redux
import { Provider } from 'react-redux';
import store from './store.js';
// Style
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <AlertDisplay />
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
