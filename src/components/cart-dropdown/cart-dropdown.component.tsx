import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { S } from './cart-dropdown.styles';
import { StoreState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { CartItem as CartItemModel } from '../../types';

interface CartDropdownProps extends CartDropdownState, RouteComponentProps {
  dispatch: Dispatch;
}

interface CartDropdownState {
  cartItems: CartItemModel[];
}

const CartDropdown = ({ cartItems, history, dispatch }: CartDropdownProps) => {
  const handleClick = () => {
    dispatch(toggleCartDropdown());
    history.push('/checkout');
  };

  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.CartItems>
      <S.CheckoutButton
        disabled={cartItems.length ? false : true}
        onClick={handleClick}
      >
        GO TO CHECKOUT
      </S.CheckoutButton>
    </S.CartDropdown>
  );
};

const mapStateToProps = (state: StoreState): CartDropdownState => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
