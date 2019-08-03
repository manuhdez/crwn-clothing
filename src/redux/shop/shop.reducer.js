import { shopTypes } from '../action-types';

const initialState = {
  collections: null,
  isFetching: false,
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

    default:
      return state;
  }
};

export default shopReducer;
