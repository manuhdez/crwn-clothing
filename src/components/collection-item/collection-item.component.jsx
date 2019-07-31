import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { S } from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
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

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
