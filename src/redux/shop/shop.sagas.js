import { takeLatest, call, put } from 'redux-saga/effects';
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

export function* fetchCollectionsStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
