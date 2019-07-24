import { userTypes } from '../action-types';

const initialState = {
  currentUser: null
};

export const userReducer = (state = initialState, { type, payload }) => {
  const { SET_CURRENT_USER } = userTypes;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};