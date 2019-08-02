import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionsRef = firestore.collection('collections');

    const unsubscribeFromSnapshot = collectionsRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // dispatch update collections with the updated collections data
        updateCollections(collectionsMap);
        setIsLoading(false);
      }
    );
    // this return is equivalent to componentWillUnmount
    return () => unsubscribeFromSnapshot();
  }, [updateCollections]);

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
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
