import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropDown, cartItems }) => (
  <div className="cart-icon" onClick={toggleCartDropDown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems}</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  })
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
