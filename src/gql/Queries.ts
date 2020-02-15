import { gql, DocumentNode } from 'apollo-boost';

export default class Queries {
  static getCollections: DocumentNode = gql`
    query collections {
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

  static getCollectionByTitle: DocumentNode = gql`
    query getCollectionsByTitle($title: String!) {
      getCollectionsByTitle(title: $title) {
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
}
