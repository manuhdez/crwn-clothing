import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { S } from './collection-preview.styles';
import { Collection } from '../../types';

interface CollectionPreviewProps extends Collection, RouteComponentProps {
  routeName: string;
}

const CollectionPreview = ({
  title,
  items,
  routeName,
  match: { path }
}: CollectionPreviewProps) => (
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
