import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';
import { Collection } from '../../types';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

interface QueryData {
  collections: {
    [name: string]: Collection;
  };
}

const CollectionsOverviewContainer = () => (
  <Query<QueryData> query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      console.log({ loading, error, data });
      if (loading) return <Spinner />;

      return <CollectionsOverview collections={data ? data.collections : {}} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
