import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  selectCartItems,
  selectCartItemsTotalPrice
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';
import { CartItem } from '../../types';
import { StoreState } from '../../redux/rootReducer';

interface CheckoutPageProps extends CheckoutPageState, CheckoutPageActions {}

interface CheckoutPageState {
  cartItems: CartItem[];
  totalPrice: number;
}

interface CheckoutPageActions {}

const CheckoutPage = ({ cartItems, totalPrice }: CheckoutPageProps) => (
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
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = (state: StoreState): CheckoutPageState => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartItemsTotalPrice(state)
});

const mapDispatchToProps = (dispatch: Dispatch): CheckoutPageActions => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
