import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';
import { Collection } from '../../types';
import { StoreState } from '../../redux/rootReducer';

// types
interface CollectionPageProps extends CollectionPageState {}

interface CollectionPageState {
  collection: Collection | null;
}

const CollectionPage = ({ collection }: CollectionPageProps) => {
  if (!collection) return null;

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: StoreState,
  ownProps: any
): CollectionPageState => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
