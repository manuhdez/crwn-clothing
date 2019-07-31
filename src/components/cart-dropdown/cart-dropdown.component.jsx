import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { S } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
