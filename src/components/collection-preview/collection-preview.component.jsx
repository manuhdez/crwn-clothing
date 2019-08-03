import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { S } from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, match: { path } }) => (
  <S.CollectionPreview>
    <S.Title as={Link} to={`${path}/${routeName}`}>
      {title.toUpperCase()}
    </S.Title>
    <S.Preview>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </S.Preview>
  </S.CollectionPreview>
);

export default withRouter(CollectionPreview);
