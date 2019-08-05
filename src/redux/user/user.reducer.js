import { userTypes } from '../action-types';

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      };
    case userTypes.GOOGLE_SIGN_IN_FAIL:
    case userTypes.EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default userReducer;
