import React from 'react';
import { Query } from 'react-apollo';

import Queries from '../../gql/Queries';
import { Collection } from '../../types';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';
import { RouteChildrenProps } from 'react-router-dom';

interface QueryResponse {
  getCollectionsByTitle: Collection;
}

interface MatchParams {
  collectionId: string;
}

const CollectionPageContainer: React.FC<RouteChildrenProps<MatchParams>> = (
  props
) => {
  const { match } = props;

  const queryVariables = {
    title: match ? match.params.collectionId : null
  };

  return (
    <Query<QueryResponse>
      query={Queries.getCollectionByTitle}
      variables={queryVariables}
    >
      {({ loading, data }) => {
        if (loading || !data?.getCollectionsByTitle) return <Spinner />;

        return <CollectionPage collection={data.getCollectionsByTitle} />;
      }}
    </Query>
  );
};

export default CollectionPageContainer;
