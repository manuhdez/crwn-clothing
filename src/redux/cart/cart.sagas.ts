import { all, call, takeLatest, put } from 'redux-saga/effects';
import { UserTypes } from '../action-types';
import { clearCart } from './cart.actions';

function* clearCartSaga() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
