import React from 'react';

import { S } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
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
