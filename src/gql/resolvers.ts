import {
  gql,
  DocumentNode,
  ApolloClient,
  NormalizedCacheObject
} from 'apollo-boost';
import GQLMutations from './Mutations';
import { ApolloClientCacheObject } from '../types';

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (
      _root: DocumentNode,
      _args: {},
      _context: ApolloClient<NormalizedCacheObject>
    ) => {
      const { cache } = _context;

      const data = cache.readQuery<ApolloClientCacheObject>({
        query: GQLMutations.getCartHidden
      });

      if (data) {
        cache.writeQuery({
          query: GQLMutations.getCartHidden,
          data: { cartHidden: !data.cartHidden }
        });
      }
    }
  }
};
