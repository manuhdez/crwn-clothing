import React from 'react';

import { S } from './cart-item.styles';
import { CartItem as CartItemModel } from '../../types';

interface CartItemProps {
  item: CartItemModel;
}

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: CartItemProps) => (
  <S.CartItem>
    <S.ItemImage src={imageUrl} alt="item" />
    <S.ItemDetails>
      <S.ItemName>{name}</S.ItemName>
      <S.ItemPrice>
        {quantity} x ${price}
      </S.ItemPrice>
    </S.ItemDetails>
  </S.CartItem>
);

export default CartItem;
