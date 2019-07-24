import actionTypes from '../action-types';

const { SET_CURRENT_USER } = actionTypes;

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});
