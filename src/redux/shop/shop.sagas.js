import { takeEvery, call, put } from 'redux-saga/effects';
import { shopTypes } from '../action-types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFail,
  setCollectionsLoadState
} from './shop.actions';

export function* fetchCollectionsAsync() {
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

export function* fetchCollectionsStart() {
  yield takeEvery(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
