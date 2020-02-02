import { createSelector } from 'reselect';
import { StoreState } from '../rootReducer';
import { ShopReducerState } from './shop.reducer';
import { Collection } from '../../types';

const shopSelector = (state: StoreState): ShopReducerState => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionId: number) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionId] : null
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => collections
);

export const selectCollectionsIsFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const selectCollectionsErrorMessage = createSelector(
  [shopSelector],
  (shop) => shop.errorMessage
);

export const selectHasCollectionsLoaded = createSelector(
  [shopSelector],
  (shop) => !shop.hadCollectionsLoaded
);
