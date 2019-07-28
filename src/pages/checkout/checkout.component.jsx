import React from 'react';
import { connect } from 'react-redux';

import {
  selectCartItems,
  selectCartItemsTotalPrice
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total">TOTAL: ${totalPrice}</div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartItemsTotalPrice(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
