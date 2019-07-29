import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionId) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionId]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).map((collection) => collections[collection])
);
