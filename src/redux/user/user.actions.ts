import { UserTypes } from '../action-types';
import {
  EmailSignInData,
  User,
  EmailSignUpData,
  SignUpSuccessData
} from '../../types';

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (userData: EmailSignInData) => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: userData
});

export const signInSuccess = (user: User) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = (error: string) => ({
  type: UserTypes.SIGN_IN_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS
});

export const signOutFail = (error: string) => ({
  type: UserTypes.SIGN_OUT_FAIL,
  payload: error
});

export const signUpStart = (userData: EmailSignUpData) => ({
  type: UserTypes.SIGN_UP_START,
  payload: userData
});

export const signUpSucess = (data: SignUpSuccessData) => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: data
});

export const signUpFail = (error: string) => ({
  type: UserTypes.SIGN_UP_FAIL,
  payload: error
});
