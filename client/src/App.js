import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar.js';
import Landing from './components/layout/Landing/Landing.js';
import Login from './components/layout/auth/Login/Login.js';
import Register from './components/layout/auth/Register/Register.js';
import AlertDisplay from './components/layout/Alert/AlertDisplay.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import CreateProfile from './components/Profile-Form/CreateProfile.js';
import EditProfile from './components/Profile-Form/EditProfile.js';
import AddExperience from './components/Profile-Form/AddExperience.js';
import AddEducation from './components/Profile-Form/AddEducation.js';
import Profiles from './components/Profiles/Profiles.js';
import PrivateRoute from './components/routing/PrivateRoute.js';
// Redux
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
// Style
import './App.css';

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
            <Route path='/profiles' element={<Profiles />} />
            <Route
              path='/create-profile'
              element={<PrivateRoute component={CreateProfile} />}
            />
            <Route
              path='/edit-profile'
              element={<PrivateRoute component={EditProfile} />}
            />
            <Route
              path='/dashboard'
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path='/add-experience'
              element={<PrivateRoute component={AddExperience} />}
            />
            <Route
              path='/add-education'
              element={<PrivateRoute component={AddEducation} />}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
