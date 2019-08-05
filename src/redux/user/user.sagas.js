import { put, takeLatest, all, call } from 'redux-saga/effects';

import { userTypes } from '../action-types';
import { googleSignInSuccess, googleSignInFail } from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const snapShot = yield userRef.get();

    yield put(
      googleSignInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      })
    );
  } catch (error) {
    yield put(googleSignInFail(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogleSaga);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart)]);
}
