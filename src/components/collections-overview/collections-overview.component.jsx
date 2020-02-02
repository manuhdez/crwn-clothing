import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { S } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  const collectionsArray = Object.keys(collections).map(
    (collectionName) => collections[collectionName]
  );

  return (
    <S.CollectionsOverview>
      {collectionsArray.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </S.CollectionsOverview>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
