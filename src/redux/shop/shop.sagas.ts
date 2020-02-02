import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ShopTypes } from '../action-types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFail,
  setCollectionsLoadState
} from './shop.actions';

function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections');
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
    yield put(setCollectionsLoadState(true));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(ShopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
