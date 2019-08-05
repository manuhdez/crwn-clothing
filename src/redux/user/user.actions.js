import { userTypes } from '../action-types';

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
  type: userTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFail = (error) => ({
  type: userTypes.GOOGLE_SIGN_IN_FAIL,
  payload: error
});

export const emailSignInStart = (userData) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userData
});

export const emailSignInSuccess = (user) => ({
  type: userTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFail = (error) => ({
  type: userTypes.EMAIL_SIGN_IN_FAIL,
  payload: error
});
