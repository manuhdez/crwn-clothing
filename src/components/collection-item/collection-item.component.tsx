import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { S } from './collection-item.styles';
import { CartItem } from '../../types';
import { Dispatch } from 'redux';

export interface CollectionItemProps extends CollectionItemActions {
  item: CartItem;
}

interface CollectionItemActions {
  addItemToCart(item: CartItem): void;
}

const CollectionItem = ({ item, addItemToCart }: CollectionItemProps) => {
  const { name, price, imageUrl } = item;

  return (
    <S.CollectionItem>
      <S.CollectionImage image={imageUrl} />
      <S.FooterContainer>
        <S.FooterName>{name}</S.FooterName>
        <S.FooterPrice>{price}</S.FooterPrice>
      </S.FooterContainer>
      <S.AddButton inverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </S.AddButton>
    </S.CollectionItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): CollectionItemActions => ({
  addItemToCart: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
