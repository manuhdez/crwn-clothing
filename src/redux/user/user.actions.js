import { userTypes } from '../action-types';

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (userData) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userData
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = (error) => ({
  type: userTypes.SIGN_IN_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});
