import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
