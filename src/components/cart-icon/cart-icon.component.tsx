import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { S } from './cart-icon.styles';
import { StoreState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';

interface CartIconProps extends CartIconState, CartIconActions {}

interface CartIconState {
  cartItems: number;
}

interface CartIconActions {
  toggleCartDropDown(): void;
}

const CartIcon = ({ toggleCartDropDown, cartItems }: CartIconProps) => {
  return (
    <S.CartIcon onClick={toggleCartDropDown}>
      <S.ShoppingIcon />
      <S.ItemCount>{cartItems}</S.ItemCount>
    </S.CartIcon>
  );
};

const mapStateToProps = (state: StoreState): CartIconState => ({
  cartItems: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch): CartIconActions => ({
  toggleCartDropDown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
