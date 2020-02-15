import React from 'react';
import { Collection } from '../../types';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

// types
interface CollectionPageProps {
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

export default CollectionPage;
