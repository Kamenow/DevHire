import axios from 'axios';
import { setAlert } from './alert.js';

import { GET_PROFILE, PROFILE_ERROR } from './types.js';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText || 'Something went wrong',
        status: err.response.status || 500,
      },
    });
  }
};

// Create or update profile
export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        'Content-Type': 'application/json',
      };

      const res = await axios.post('/api/profile', formData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

      if (!edit) {
        navigate('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'danger'));
        });
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText || 'Something went wrong',
          status: err.response.status || 500,
        },
      });
    }
  };
