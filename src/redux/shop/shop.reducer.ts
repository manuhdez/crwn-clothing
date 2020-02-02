import { ShopTypes } from '../action-types';
import { Collection } from '../../types';

export interface ShopReducerState {
  collections: {
    [name: string]: Collection;
  };
  isFetching: boolean;
  hadCollectionsLoaded: boolean;
  errorMessage: string;
}

export interface ShopReducerAction {
  type: ShopTypes;
  payload?: any;
}

const initialState: ShopReducerState = {
  collections: {},
  isFetching: false,
  hadCollectionsLoaded: false,
  errorMessage: ''
};

const shopReducer = (
  state = initialState,
  action: ShopReducerAction
): ShopReducerState => {
  const { type, payload } = action;

  switch (type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false
      };
    case ShopTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    case ShopTypes.SET_COLLECTIONS_LOAD_STATE:
      return {
        ...state,
        hadCollectionsLoaded: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
