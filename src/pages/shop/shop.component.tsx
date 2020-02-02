import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// types
interface ShopPageProps extends ShopPageActions {
  match: {
    path: string;
  };
}

interface ShopPageActions {
  fetchCollections(): void;
}

const ShopPage = ({ match, fetchCollections }: ShopPageProps) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): ShopPageActions => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
