import { Dispatch } from 'redux';
import { ShopTypes } from '../action-types';
import { ShopReducerAction } from './shop.reducer';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const setCollectionsLoadState = (
  newState: boolean
): ShopReducerAction => ({
  type: ShopTypes.SET_COLLECTIONS_LOAD_STATE,
  payload: newState
});

export const fetchCollectionsStart = (): ShopReducerAction => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
});

// TODO: update collections type
export const fetchCollectionsSuccess = (
  collections: any[]
): ShopReducerAction => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFail = (error: string): ShopReducerAction => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAIL,
  payload: error
});

// This thunk middleware functions is beeing replaced by a saga function
export const fetchCollectionsAsync = () => {
  return async (dispatch: Dispatch<ShopReducerAction>) => {
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
