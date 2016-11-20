import CoreLayout from 'layouts/CoreLayout';
import LoginRoute from './Login';
import HomeRoute from './Home';

export const createRoutes = (store) => ({
  path: '/',
  onEnter: (nextState, replace, cb) => {
    const { global: { loaded } } = store.getState();
    if (loaded) {
      cb();
      return;
    }
    const getMe = require('./resolver').default;

    getMe(store).then(() => cb());
  },
  childRoutes: [
    // user must be not logged in
    {
      onEnter: (nextState, replace, cb) => {
        const { global: { user } } = store.getState();
        if (user) {
          replace('/');
        }
        cb();
      },
      childRoutes: [
        LoginRoute(store),
      ],
    },
    // user must be logged in
    {
      onEnter: (nextState, replace, cb) => {
        const { global: { user } } = store.getState();
        if (!user) {
          replace('/login');
        }
        cb();
      },
      component: CoreLayout,
      indexRoute: {
        onEnter: (nextState, replace, cb) => {
          replace('/home');
          cb();
        },
      },
      childRoutes: [
        HomeRoute(store),
      ],
    },
  ],
});

export default createRoutes;
