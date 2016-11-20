import { asyncConnect } from 'redux-connect';
import { actions as gridActions } from '../store/modules/Grid';

// default mergeProps from redux
export const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...stateProps, ...dispatchProps, ...ownProps });

/**
 * Helper function to create root container in routes
 * @param mapState the redux mapState function
 * @param actions the redux actions
 * @param gridValues the values to initialize the grid
 * @param component the component to be wrapped
 * @returns {*} the container
 */
export function createContainer(mapState, actions, gridValues, component) {
  const resolve = [{
    promise: ({ store }) => {
      store.dispatch(gridActions.initGrid(gridValues));
      return Promise.resolve();
    },
  }];

  return asyncConnect(resolve, mapState, actions, mergeProps, { pure: false })(component);
}

export default {
  createContainer,
};
