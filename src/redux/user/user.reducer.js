import { userTypes } from '../action-types';

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      };
    case userTypes.SIGN_IN_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default userReducer;
