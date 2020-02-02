import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { S } from './collections-overview.styles';
import { Collection } from '../../types';
import { StoreState } from '../../redux/rootReducer';

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

const mapStateToProps = (state: StoreState): CollectionsOverviewState => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
