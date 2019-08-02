import { shopTypes } from '../action-types';

export const updateCollections = (collections) => ({
  type: shopTypes.UPDATE_COLLECTIONS,
  payload: collections
});
