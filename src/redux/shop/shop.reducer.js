// import { SHOP_DATA } from './shop.data'
import { shopTypes } from '../action-types';

const initialState = {
  collections: {}
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };

    default:
      return state;
  }
};

export default shopReducer;
