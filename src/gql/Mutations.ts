import { gql } from 'apollo-boost';

export default class GQLMutations {
  static getCartHidden = gql`
    {
      cartHidden @client
    }
  `;
}
