import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar.js';
import Landing from './components/layout/Landing/Landing.js';
import Login from './components/layout/auth/Login/Login.js';
import Register from './components/layout/auth/Register/Register.js';
import AlertDisplay from './components/layout/Alert/AlertDisplay.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import PrivateRoute from './components/routing/PrivateRoute.js';
// Redux
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
// Style
import './App.css';
import CreateProfile from './components/Profile-Form/CreateProfile.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <AlertDisplay />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/create-profile'
              element={<PrivateRoute component={CreateProfile} />}
            />
            <Route
              path='/dashboard'
              element={<PrivateRoute component={Dashboard} />}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
