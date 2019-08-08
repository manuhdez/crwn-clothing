import { put, takeLatest, all, call } from 'redux-saga/effects';

import { userTypes } from '../action-types';
import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  signUpSucess,
  signUpFail
} from './user.actions';

import {
  auth,
  googleProvider,
  getCurrentUser,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapShot = yield userRef.get();

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

function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* emailSignInSaga({ payload: { email, password } }) {
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

function* signUpUserSaga({ payload: { email, password, displayName } }) {
  yield console.log('user signin up');
  try {
    // this creates a new user reference and returns it into the user property
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSucess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFail(error.message));
  }
}

function* signInAfterSignUpSaga({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogleSaga);
}

function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignInSaga);
}

function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSessionSaga);
}

function* onUserSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOutUserSaga);
}

function* onSignUpStart() {
  yield takeLatest(userTypes.SIGN_UP_START, signUpUserSaga);
}

function* onSignUpSuccess() {
  yield takeLatest(userTypes.SIGN_UP_SUCCESS, signInAfterSignUpSaga);
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
