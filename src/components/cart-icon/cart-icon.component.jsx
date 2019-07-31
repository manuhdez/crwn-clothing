import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { S } from './cart-icon.styles';

const CartIcon = ({ toggleCartDropDown, cartItems }) => {
  return (
    <S.CartIcon onClick={toggleCartDropDown}>
      <S.ShoppingIcon />
      <S.ItemCount>{cartItems}</S.ItemCount>
    </S.CartIcon>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
