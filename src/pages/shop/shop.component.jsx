import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import {
  selectCollectionsIsFetching,
  selectCollectionsHasLoaded
} from '../../redux/shop/shop.selectors';

import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({
  match,
  isLoading,
  hasCollectionsLoaded,
  fetchCollections
}) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!hasCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: selectCollectionsIsFetching(state),
  hasCollectionsLoaded: selectCollectionsHasLoaded(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
