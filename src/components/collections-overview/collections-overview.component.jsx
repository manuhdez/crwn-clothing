import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { S } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <S.CollectionsOverview>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </S.CollectionsOverview>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
