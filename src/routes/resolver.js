import APIService from '../services/APIService';

export default async (store) => {
  const accessToken = localStorage.token;
  if (!accessToken) {
    store.dispatch({ type: 'global/LOADED', payload: null });
    return;
  }
  try {
    const {user} = await APIService.getMe();
    store.dispatch({
      type: 'global/LOADED',
      payload: user,
    });
  } catch (e) {
    console.error(e);
    store.dispatch({ type: 'global/LOADED', payload: null });
  }
};
