import { shopTypes } from '../action-types';

const initialState = {
  collections: null,
  isFetching: false,
  hadCollectionsLoaded: false,
  errorMessage: ''
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false
      };
    case shopTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    case shopTypes.SET_COLLECTIONS_LOAD_STATE:
      return {
        ...state,
        hadCollectionsLoaded: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
