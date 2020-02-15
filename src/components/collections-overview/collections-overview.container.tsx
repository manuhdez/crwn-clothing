import React from 'react';
import { Query } from 'react-apollo';

// types
import { Collection } from '../../types';

// queries
import Queries from '../../gql/Queries';

// components
import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

interface QueryData {
  collections: {
    [name: string]: Collection;
  };
}

const CollectionsOverviewContainer = () => (
  <Query<QueryData> query={Queries.getCollections}>
    {({ loading, error, data }) => {
      console.log({ loading, error, data });
      if (loading) return <Spinner />;

      return <CollectionsOverview collections={data ? data.collections : {}} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
