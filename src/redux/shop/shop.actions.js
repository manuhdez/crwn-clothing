import { shopTypes } from '../action-types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const setCollectionsLoadState = (newState) => ({
  type: shopTypes.SET_COLLECTIONS_LOAD_STATE,
  payload: newState
});

export const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFail = (error) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAIL,
  payload: error
});

export const fetchCollectionsAsync = () => {
  return async (dispatch) => {
    const collectionsRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    dispatch(setCollectionsLoadState(false));

    try {
      const snapshot = await collectionsRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      dispatch(fetchCollectionsSuccess(collectionsMap));
      dispatch(setCollectionsLoadState(true));
    } catch (error) {
      dispatch(fetchCollectionsFail(error.message));
    }
  };
};
