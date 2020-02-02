import { put, takeLatest, all, call } from 'redux-saga/effects';
import {
  EmailSignUpData,
  UserRef,
  EmailSignInData,
  SignUpSuccessData,
  User
} from '../../types';
import { UserTypes } from '../action-types';
import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  signUpSucess,
  signUpFail
} from './user.actions';
import { UserReducerAction } from './user.reducer';

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

/**
 * Gets a user snapshot from firestore after creating a new user entry on the database
 *
 * @param userAuth
 * @param additionalData
 */
function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalData?: any
): Generator<any, any, UserRef> {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );

    // TODO: fix user snapshot type inference
    const snapShot: any = yield userRef.get();

    yield put(
      signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      })
    );
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

/**
 * Signs in a user with Google authentication
 */
function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* emailSignInSaga({
  payload: { email, password }
}: UserReducerAction<EmailSignInData>) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* checkUserSessionSaga() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* signOutUserSaga() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error.message));
  }
}

function* signUpUserSaga({
  payload: { email, password, displayName }
}: UserReducerAction<EmailSignUpData>) {
  yield console.log('user signin up');
  try {
    // this creates a new user reference and returns it into the user property
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSucess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFail(error.message));
  }
}

function* signInAfterSignUpSaga({
  payload: { user, additionalData }
}: UserReducerAction<SignUpSuccessData>) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* onGoogleSignInStart() {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogleSaga);
}

function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailSignInSaga);
}

function* onCheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, checkUserSessionSaga);
}

function* onUserSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, signOutUserSaga);
}

function* onSignUpStart() {
  yield takeLatest(UserTypes.SIGN_UP_START, signUpUserSaga);
}

function* onSignUpSuccess() {
  yield takeLatest(UserTypes.SIGN_UP_SUCCESS, signInAfterSignUpSaga);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onUserSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
