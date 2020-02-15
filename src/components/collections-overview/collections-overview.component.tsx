import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { S } from './collections-overview.styles';
import { Collection } from '../../types';

interface CollectionsOverviewProps extends CollectionsOverviewState {}

interface CollectionsOverviewState {
  collections: {
    [name: string]: Collection;
  };
}

const CollectionsOverview = ({ collections }: CollectionsOverviewProps) => {
  const collectionsArray = Object.keys(collections).map(
    (collectionName) => collections[collectionName]
  );

  return (
    <S.CollectionsOverview>
      {collectionsArray.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </S.CollectionsOverview>
  );
};

export default CollectionsOverview;
