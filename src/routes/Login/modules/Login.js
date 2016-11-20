import {createAction, handleActions} from 'redux-actions';
import { push } from 'react-router-redux';
import APIService from '../../../services/APIService';

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_ERROR = 'Login/LOGIN_ERROR';

// ------------------------------------
// Actions
// ------------------------------------


export const handleLoginSubmit = (values, dispatch) => new Promise((resolve) => {
  APIService.login(values).then(({user, token}) => {
    localStorage.token = token;
    dispatch({ type: 'global/LOADED', payload: user });
    dispatch(push('/'));
    resolve();
  }).catch(() => {
    resolve();
    dispatch({ type: LOGIN_ERROR });
  });
});


export const sample2 = () => async (dispatch, getState) => {

};

export const actions = {
  
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [LOGIN_ERROR]: (state) => ({...state, invalidLogin: true}),
}, {
  invalidLogin: false,
});
