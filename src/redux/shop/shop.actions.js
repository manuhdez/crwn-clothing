import { shopTypes } from '../action-types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START
});

const fetchCollectionsSuccess = (collections) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

const fetchCollectionsFail = (error) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAIL,
  payload: error
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionsRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionsRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFail(error.message)));
  };
};
