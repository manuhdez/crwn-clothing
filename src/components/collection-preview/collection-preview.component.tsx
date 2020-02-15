import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { S } from './collection-preview.styles';
import { Collection } from '../../types';

interface CollectionPreviewProps extends Collection, RouteComponentProps {}

const CollectionPreview = ({
  title,
  items,
  match: { path }
}: CollectionPreviewProps) => (
  <S.CollectionPreview>
    <S.Title as={Link} to={`${path}/${title.toLowerCase()}`}>
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
