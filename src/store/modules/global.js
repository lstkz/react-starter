import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const LOADED = 'global/LOADED';
export const LOGGED_IN = 'global/LOGGED_IN';

// ------------------------------------
// Actions
// ------------------------------------


export const actions = {
  loaded: createAction(LOADED),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [LOADED]: (state, {payload: user}) => ({...state, loaded: true, user}),
}, {
  loaded: false,
  user: null,
});
